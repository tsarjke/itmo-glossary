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
            {data && Object.keys(data).map(term => (<li key={term} className="term">
                <Link to={`/description/${term}`} className="link">{data[term].title}</Link>
            </li>))}
        </ul>
    );
}

export default GlossaryPage;
