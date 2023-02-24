import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            My post
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='15'/>
                <Post message="it's my first post" likesCount='20'/>

            </div>
        </div>
    )
}

export default MyPosts;