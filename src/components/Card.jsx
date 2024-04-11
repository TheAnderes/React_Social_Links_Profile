import React from 'react'
import UserDetails from './UserDetails'
import BotonSection from './BotonSection'
import './Card.css'

const Card = (props) => {
    const user = props.user;
    return (
        <div className="dinamicConteiner">
            {/* <UserDetails user={user} /> */}
            <BotonSection />
        </div>
    );
};

export default Card;