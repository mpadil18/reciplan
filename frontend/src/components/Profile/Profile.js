import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import apiClient from "../../services/apiClient";

import tempImg from "../../assets/tempProfileImg.png";
import location from "../../assets/location.svg";
import './Profile.css'
export default function Profile({ user }) {
    console.log(user)
    const [profile, setProfile] = useState({})

    useEffect(() => {
        const fetchProfile = async () => {
            const { data, error } = await apiClient.fetchProfile()
            if (data) {
                setProfile(data)
            }
            if (error) {
                console.log(error, "Profile.js")
            }
        }

        fetchProfile()
    }, [])

    console.log(profile)

    return (
        <div className="Profile">
            <div className="profile-display">
                <div className="profile-left">
                    <div className="profile-img">
                        {profile.image_url ?
                            <img src={profile.image_url} alt="User profile img"></img> : 
                            <img src={tempImg} alt="Placeholder img"></img>
                        }
                    </div>
                    <div className="fav-flavors">
                    {/* Categories to input flavors */}
                    {profile.fav_flavors ? 
                        <div>fav flavors: {profile.fav_flavors}</div> : null
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
        </div>
    );
}
