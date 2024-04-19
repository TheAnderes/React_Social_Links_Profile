import React from 'react'
import './ImagenCharacter.css'

function ImagenCharacter(props) {
    const information = props.info

    return (
        <div className="conteiner-status">
            <p className="descrip-number">Nro. {information.id}</p>
            <img className="imagen-character" src={information.image} alt={information.name} />
            <button className="buttons-character">Status</button>
            <p className="descrip-character"><span style={{ color: 'var(--Green)' }}>Name:</span> {information.name}</p>
            <p className="descrip-character"><span style={{ color: 'var(--Green)' }}>Specie:</span> {information.species}</p>
            <p className="descrip-character"><span style={{ color: 'var(--Green)' }}>Gender:</span> {information.gender}</p>
            <p className="descrip-character"><span style={{ color: 'var(--Green)' }}>Status:</span> {information.status}</p>
        </div>
    )
}

export default ImagenCharacter