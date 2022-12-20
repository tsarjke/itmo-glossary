import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import './Desc.css';

const Desc: React.FC = () => {
    const [desc, setDesc] = useState<{ title: string, description: string }>();
    const term = useParams().term;

    useEffect(() => {
        fetch(`/${term}`).then(r => r.json()).then(x => setDesc(x));
    }, [term]);

    return (
        <div className="term-wrapper">
            {desc ? (<>
                <h2 className="term-title">{desc.title}</h2>
                <p className="term-desc">{desc.description}.</p>
            </>) : <h2 className="term-title warning">Определение не найдено</h2>}
            <div className="link-wrapper">
                <Link to="/glossary" className="back-link">Назад</Link>
            </div>
        </div>
    );
}

export default Desc;
