import React from 'react'
import ImagenCharacter from './ImagenCharacter';
import EpisodesCards from './EpisodesCards';
import './CharacterSection.css'

function CharacterSection(props) {
    const character = props.character
    return (
        <div className="conteiner-dinamic">
            <ImagenCharacter info={character} />
            <EpisodesCards info={character} />
        </div>
    );
};

export default CharacterSection;