import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from "./router/routes";
import './App.css';

const App: React.FC = () => {
    const routes = useRoutes();

    return (
        <Router>
            <div className="App">
                <header className="header">
                   <h1 className="title">Глоссарий терминов</h1>
                    <h2 className="subtitle">Царев Иван P42091</h2>
                </header>
                <div className="container">{routes}</div>
            </div>
        </Router>
    );
}

export default App;
