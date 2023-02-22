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
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;