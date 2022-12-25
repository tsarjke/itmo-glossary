import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {useRoutes} from "./router/routes";
import './App.css';

const App: React.FC = () => {
    const routes = useRoutes();

    return (
        <Router>
            <div className="App">
                <header className="header">
                   <h1 className="title">Глоссарий терминов</h1>
                    <h2 className="subtitle name">Царев Иван P42091</h2>
                    <div className="link-wrapper">
                        <Link to="/mindmap" className="subtitle link">Mindmap</Link>
                    </div>
                </header>
                <div className="container">{routes}</div>
            </div>
        </Router>
    );
}

export default App;
