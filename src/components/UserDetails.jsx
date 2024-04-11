import React from "react";
import './UserDetails.css'
import { useState } from "react";

const UserDetails = (props) => {
    const [userOne, setuserOne] = useState({
    });
    setuserOne(props.user);

    return (
        <div className="conteiner-details">
            <img src={userOne.avatar} className="imagen" alt={`avatar de ${userOne.name}`} />
            <p className="nombre">{userOne.name}</p>
            <p className="lugar">{userOne.location}</p>
            <p className="descrip">{userOne.description}</p>
        </div>
    );
};

export default UserDetails;