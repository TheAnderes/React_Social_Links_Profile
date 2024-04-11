import React from "react";
import avatarJessica from '../assets/avatar-jessica.jpeg'
import './UserDetails.css'

const UserDetails = () => {
    fetch('https://661038100640280f219c9a20.mockapi.io/api/v1/users').then(response => { })
    return (
        <div className="conteiner-details">
            <img src={avatarJessica} className="imagen" />
            <p className="nombre">Jessica Randall</p>
            <p className="lugar">London, United Kingdom</p>
            <p className="descrip">"Front-end developer and avid reader."</p>
        </div>
    );
};

export default UserDetails;