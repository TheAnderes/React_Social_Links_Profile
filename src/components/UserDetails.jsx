import React from "react";
import './UserDetails.css'

const UserDetails = (props) => {
    const userOne = props.user
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