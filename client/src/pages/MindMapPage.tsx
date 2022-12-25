import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './GlossaryPage.css';
import MindMap from "../components/MindMap";

const MindMapPage: React.FC = () => {
    const [data, setData] = useState<any>();

    const createMindmapData = (mindmapOpt: {connections: [[string, string]], names: any}) =>
        mindmapOpt.connections.map((conPair: [string, string]) => [mindmapOpt.names[conPair[0]], mindmapOpt.names[conPair[1]]]);

    useEffect(() => {
        fetch('/mindmap').then(r => r.json()).then(x => setData(createMindmapData(x)));
    }, []);
    // const AUTHENTICATION = 'Аутентификация';
    // const JWT = 'JSON Web Token';
    // const IDENTIFICATION = 'Идентификация';
    // const DIGITAL_FINGERPRINT = 'Цифровой отпечаток браузера';
    // const COOKIE = 'Cookie файл';
    // const WEB = 'Всемирная паутина';
    // const WEB_SERVER = 'Веб-сервер';
    // const AUTHORIZATION = 'Авторизация';
    // const BIOMETRICS = 'Биометрия;'
    // const IP = 'IP адрес';
    // const MAC = 'MAC адрес';
    // const USER_AGENT = 'Пользовательский агент';
    // const MFA = 'Многофакторная аутентификация';
    // const HTTP = 'HTTP протокол';
    // const PKI = 'Инфраструктура открытых ключей';
    // const STRONG_CRYPTOGRAPHY = 'Криптостойкость';
    // const CRYPTANALYSIS = 'Криптоанализ';
    // const KERBEROS = 'Kerberos';
    // const SSH = 'Secure Shell';
    // const SSL = 'Secure Sockets Layer';
    // const HASH = 'Хеш функция';
    // const PROXY = 'Прокси-сервер';
    // const DATABASE = 'База данных';
    // const DBMS = 'Система управления базой данных';
    //
    // let data = [
    //     [WEB, HTTP],
    //     [WEB, SSH],
    //     [WEB, SSL],
    //     [WEB, PROXY],
    //     [WEB, WEB_SERVER],
    //     [WEB_SERVER, AUTHENTICATION],
    //     [WEB_SERVER, IDENTIFICATION],
    //     [WEB_SERVER, AUTHORIZATION],
    //     [WEB_SERVER, DATABASE],
    //     [WEB_SERVER, DBMS],
    //     [WEB_SERVER, IP],
    //     [AUTHENTICATION, JWT],
    //     [AUTHENTICATION, COOKIE],
    //     [AUTHENTICATION, BIOMETRICS],
    //     [AUTHENTICATION, MFA],
    //     [AUTHENTICATION, PKI],
    //     [AUTHENTICATION, KERBEROS],
    //     [IDENTIFICATION, PKI],
    //     [IDENTIFICATION, DIGITAL_FINGERPRINT],
    //     [IDENTIFICATION, IP],
    //     [IDENTIFICATION, USER_AGENT],
    //     [IDENTIFICATION, MAC],
    //     [PKI, STRONG_CRYPTOGRAPHY],
    //     [STRONG_CRYPTOGRAPHY, CRYPTANALYSIS],
    //     [STRONG_CRYPTOGRAPHY, SSL],
    //     [STRONG_CRYPTOGRAPHY, HASH],
    //     [DIGITAL_FINGERPRINT, USER_AGENT],
    // ];

    return (
        <>
            {data && <MindMap data={data}/>}
            <div className="link-wrapper">
                <Link to="/glossary" className="back-link">Назад</Link>
            </div>
        </>
    );
}

export default MindMapPage;
