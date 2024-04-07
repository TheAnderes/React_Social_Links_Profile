import React from 'react'
import UserDetails from './UserDetails'
import BotonSection from './BotonSection'
import './Card.css'

const Card = () => {
    return (
        <div className="dinamicConteiner">
            <UserDetails />
            <BotonSection />
        </div>
    );
};

export default Card;