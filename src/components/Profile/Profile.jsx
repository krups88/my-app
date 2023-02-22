import React from "react"
import s from'./Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;