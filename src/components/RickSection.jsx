import React from 'react'
import "./RickSection.css"

function RickSection(props) {
    const userOne = props.user
    return (
        <div className="conteiner-rick">
            <div className="conteiner-imagen">
                <img src={userOne.image} className="imagen" alt={`avatar de ${userOne.name}`} />
            </div>
            <div className="conteiner-datos">
                <p className="descrip">Name: {userOne.name}</p>
                <p className="descrip">Specie: {userOne.species}</p>
                <p className="descrip">Status: {userOne.status}</p>
                <p className="descrip">Gender: {userOne.gender}</p>
                <p className="descrip">Location: {userOne.location.name}</p>
            </div>
        </div>
    );
};

export default RickSection;