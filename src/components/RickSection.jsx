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
                <p className="descrip"><span style={{ color: 'var(--Green)' }}>Name:</span>{userOne.name}</p>
                <p className="descrip"><span style={{ color: 'var(--Green)' }}>Specie:</span>{userOne.species}</p>
                <p className="descrip"><span style={{ color: 'var(--Green)' }}>Gender:</span>{userOne.gender}</p>
                <p className="descrip"><span style={{ color: 'var(--Green)' }}>Location:</span>{userOne.location.name}</p>
            </div>
        </div>
    );
};

export default RickSection;