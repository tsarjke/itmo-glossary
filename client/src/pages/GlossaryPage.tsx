import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './GlossaryPage.css';

const GlossaryPage: React.FC = () => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        fetch('/glossary').then(r => r.json()).then(x => setData(x));
    }, []);

    return (
        <ul className="glossary">
            {data && Object.keys(data).map(term => (<li className="term">
                <Link key={term} to={`/description/${term}`} className="link">{term}</Link>
            </li>))}
        </ul>
    );
}

export default GlossaryPage;
