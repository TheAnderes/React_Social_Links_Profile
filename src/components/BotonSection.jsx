import React from 'react'
import './BotonSection.css'

const BotonSection = ({ botones }) => {
    console.log(botones)
    return (
        <div className="conteiner-button">
            {
                botones.map(
                    (boton) => (<button className="buttons" key={boton.name}>{boton.name}</button>)
                )
            }
            {/* <button className="buttons">GitHub</button> */}
            {/* <button className="buttons">Frontered Mentor</button>
            <button className="buttons">LinkedIn</button>
            <button className="buttons">Twitter</button>
            <button className="buttons">Instagram</button> */}
        </div>
    );
};

export default BotonSection;