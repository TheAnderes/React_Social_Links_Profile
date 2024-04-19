import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './EpisodesCards.css'

function EpisodesCards(props) {
    const information = props.info;
    const episodios = [];
    const [episode1, setepisode1] = useState([]);
    useEffect(() => {
        fetch(`${information.episode[0]}`).then(response => {
            return response.json();
        }).then(data => {
            setepisode1(data);
            console.log(data);
        })
    }, []);
    const [episode2, setepisode2] = useState([]);
    useEffect(() => {
        fetch(`${information.episode[1]}`).then(response => {
            return response.json();
        }).then(data => {
            setepisode2(data);
            console.log(data);
        })
    }, []);
    const [episode3, setepisode3] = useState([]);
    useEffect(() => {
        fetch(`${information.episode[2]}`).then(response => {
            return response.json();
        }).then(data => {
            setepisode3(data);
            console.log(data);
        })
    }, []);
    const [episode4, setepisode4] = useState([]);
    useEffect(() => {
        fetch(`${information.episode[3]}`).then(response => {
            return response.json();
        }).then(data => {
            setepisode4(data);
            console.log(data);
        })
    }, []);
    const [episode5, setepisode5] = useState([]);
    useEffect(() => {
        fetch(`${information.episode[4]}`).then(response => {
            return response.json();
        }).then(data => {
            setepisode5(data);
            console.log(data);
        })
    }, []);
    if (episode1.length != 0) {
        episodios.push(episode1)
    }
    if (episode2.length != 0) {
        episodios.push(episode2)
    }
    if (episode3.length != 0) {
        episodios.push(episode3)
    }
    if (episode4.length != 0) {
        episodios.push(episode4)
    }
    if (episode5.length != 0) {
        episodios.push(episode5)
    }
    console.log(episodios)
    return (
        <div className="conteiner-episodes">
            <p className="descrip-carac">EPISODES</p>
            <div className="episodes-carac">
                {episodios.map((epi) => (
                    <div key={epi.id} className="tarjeta-episodes">
                        <p className="descrip-episode"><span style={{ color: 'var(--Green)' }}>Name:</span> {epi.name}</p>
                        <p className="descrip-episode"><span style={{ color: 'var(--Green)' }}>Air Date:</span> {epi.air_date}</p>
                        <p className="descrip-episode"><span style={{ color: 'var(--Green)' }}>Episode:</span> {epi.episode}</p>
                    </div>)
                )
                }
            </div>
            <button className="buttons-episodes">HOME</button>
        </div>
    );
};

export default EpisodesCards;