import React from "react";
import avatarJessica from '../assets/avatar-jessica.jpeg'
import './UserDetails.css'

const UserDetails = () => {
    return (
        <div className="form1">
            <div className="informacion">
                <img src={avatarJessica} className="imagen" />
                <p className="nombre">Jessica Randall</p>
                <p className="lugar">London, United Kingdom</p>
                <p className="descrip">"Front-end developer and avid reader."</p>
            </div >
        </div>
    );
};

export default UserDetails;