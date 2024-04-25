import React from 'react'
import Card from './Card';
import { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    function Aleatorio() {
        const numeros = [];
        for (let i = 0; i < 30; i++) {
            numeros.push(Math.floor(Math.random() * 826));
        }
        numeros.toString();
        return numeros;
    };
    console.log(Aleatorio())

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/[" + Aleatorio() + "]").then(response => {
            return response.json();
        }).then(data => {
            setUsers(data)
            console.log(data)
        })
    }, []);

    return (
        <div className="cartas-continer">
            {
                users.map(
                    (datos) => (<Card key={datos.id} user={datos} />)
                )
            }
        </div>
    )
};
export default Home;