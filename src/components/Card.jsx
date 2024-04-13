import React from 'react'
import UserDetails from './UserDetails'
import BotonSection from './BotonSection'
import './Card.css'

const Card = (props) => {
    const details = props.user;
    const sociaLinks = details.SocialLinks;
    return (
        <div className="dinamicConteiner">
            <UserDetails user={details} />
            <BotonSection botones={sociaLinks} />
        </div>
    );
};

export default Card;