import React from "react";
import './UserDetails.css'

const UserDetails = (props) => {
    const userOne = props.user
    return (
        <div className="conteiner-details">
            <img src={userOne.image} className="imagen" alt={`avatar de ${userOne.name}`} />
            <p className="nombre">{userOne.name}</p>
            <p className="lugar">{userOne.species}</p>
            <p className="descrip">{userOne.status}</p>
        </div>
    );
};

export default UserDetails;