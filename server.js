const fs = require('fs');
const http = require('http');
const https = require('https');
const url = require('url');

let dictionary = null;

const dictionaryHandler = (request, response) => {
    const u = url.parse(request.url);

    if (u.pathname == '/readyz') {
        if (dictionary) {
            response.writeHead(200);
            response.end('OK');
        } else {
            response.writeHead(404);
            response.end('Not Loaded');
        }
        return;
    } else if (u.pathname == '/glossary') {
        response.setHeader('Content-Type', 'application/json');
        response.writeHead(200);
        response.end(JSON.stringify(dictionary));
        return;
    }

    let key = '';
    if (u.pathname.length > 0) {
        key = u.pathname.substr(1).toLowerCase();
    }
    console.log('key', key);
    const defObj = dictionary ? dictionary[key] : null;
    if (!defObj) {
        response.writeHead(404);
        response.end(key + ' was not found');
        return;
    }
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(200);
    response.end(JSON.stringify(defObj));
}

const downloadDictionary = (url, file, callback) => {
  const stream = fs.createWriteStream(file);
  const req = https.get(url, function(res) {
    res.pipe(stream);
    stream.on('finish', function() {
      stream.close(callback);
      console.log('dictionary downloaded');
    });
  }).on('error', function(err) {
    fs.unlink(file);
    if (callback) cb(err.message);
  });
};

const loadDictionary = (file, callback) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(err);
            callback(err);
            return;
        }
        dictionary = JSON.parse(data);
        console.log('dictionary loaded.');
        callback();
    })
};

downloadDictionary('https://raw.githubusercontent.com/tsarjke/itmo-glossary/main/dictionary.json', 'dictionary.json', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    loadDictionary('dictionary.json', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('ready to serve');
    });
});

const server = http.createServer(dictionaryHandler);

server.listen(8080, (err) => {
  if (err) {
    return console.log('error starting server: ' + err);
  }

  console.log('server is listening on 8080');
});