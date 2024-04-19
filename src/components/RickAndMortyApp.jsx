import React from 'react'
import { useEffect, useState } from 'react';
import './RickAndMortyApp.css'
import CharacterSection from './CharacterSection';
import { useSearchParams } from 'react-router-dom';

function RickAndMortyApp() {
    const [users, setUsers] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/[${id}]`).then(response => {
            return response.json();
        }).then(data => {
            setUsers(data)
            console.log(data)
        })
    }, []);

    return (
        <div className="principal">
            {
                users.map(
                    (datos) => (
                        <CharacterSection key={datos.id} character={datos} />)
                )
            }
        </div>
    )
};

export default RickAndMortyApp;