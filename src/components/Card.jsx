import React from 'react'
import UserDetails from './UserDetails'
import BotonSection from './BotonSection'
import RickSection from './RickSection'
import './Card.css'

const Card = (props) => {
    const details = props.user;
    const sociaLinks = details.SocialLinks;
    return (
        <div className="dinamicConteiner">
            <RickSection user={details} />
            {/* <UserDetails user={details} /> */}
            {/* <BotonSection botones={sociaLinks} /> */}
        </div>
    );
};

export default Card;