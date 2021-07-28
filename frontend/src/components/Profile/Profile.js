import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import apiClient from "../../services/apiClient";

import tempImg from "../../assets/tempProfileImg.png";
import location from "../../assets/location.svg";
import './Profile.css'

export default function Profile({ user, profile, flavors }) {
    console.log(profile)
    return (
        <div className="Profile">
            {!user.email ? 
            <div>Login <Link to="/login">here</Link> to view your profile page</div> :

            <div className="profile-display">
                <div className="profile-left">
                    <div className="profile-img">
                        {profile.image_url ?
                            <img src={profile.image_url} alt="User profile img"></img> : 
                            <img src={tempImg} alt="Placeholder img"></img>
                        }
                    </div>
                    <div className="fav-flavors">
                        {flavors?.length > 0 ?
                            flavors.map(element => (
                                <div>{element.flavor}</div>
                            )) : null 
                        }
                    </div>
                </div>
                <div className="profile-right">
                    <div className="profile-basic">
                        <div className="profile-name">{user.first_name} {user.last_name}</div>
                        <div className="location">
                            {profile.region ? 
                            <>
                                <img src={location} alt="Location Icon"></img>
                                <span>{profile.region}</span> 
                            </> : null
                            }
                        </div>
                    </div>
                    <div> username: {user.username}</div>
                    <div> email: {user.email}</div>
                    {profile.short_bio ? 
                        <div>short bio: {profile.short_bio}</div> : null
                    }
                </div>
                <Link to='/profile/edit' className="edit-btn">...</Link>
            </div>
            }
        </div>
    );
}
