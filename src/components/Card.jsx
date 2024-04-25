import React from 'react'
import UserDetails from './UserDetails'
import BotonSection from './BotonSection'
import RickSection from './RickSection'
import './Card.css'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    const details = props.user;
    console.log(details)
    const sociaLinks = details.SocialLinks;
    return (
        <div className="dinamicConteiner">
            <NavLink to={`/character?id=${details.id}`}>
                <RickSection user={details} />
                {/* <UserDetails user={details} /> */}
                {/* <BotonSection botones={sociaLinks} /> */}
            </NavLink>
        </div>
    );
};

export default Card;