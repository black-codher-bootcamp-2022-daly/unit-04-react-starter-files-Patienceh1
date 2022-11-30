import React from 'react';
import { useState } from 'react';

export default function NameList() {
    const [List, setList] = useState([Patricia, Prudence, Patience]);

    return (
        <div className=''><ul>
            {List.map((name)=>(
                <li key={name}>{name}</li>
            ))}
            </ul></div>
        
    )
}