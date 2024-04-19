import React from 'react'
import { useEffect, useState } from 'react';
import './RickAndMortyApp.css'
import Card from './components/Card'
import CharacterSection from './components/CharacterSection';

let resultado = window.prompt("Ingresa un valor del 1 al 826")
function RickAndMortyApp() {
    function Aleatorio() {
        const numeros = [];
        for (let i = 0; i < 1; i++) {
            numeros.push(Math.floor(Math.random() * 826));
        }
        numeros.toString();
        return numeros;
    };
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/[${resultado}]`).then(response => {
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
                        //<Card key={datos.id} user={datos} />,
                        <CharacterSection key={datos.id} character={datos} />)
                )
            }
        </div>
    )
};

export default RickAndMortyApp;