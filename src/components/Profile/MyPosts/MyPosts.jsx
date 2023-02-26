import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";


let postData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 11 },
    { id: 2, message: "it's my first post", likesCount: 22 },
    { id: 3, message: 'Hi, how are you?', likesCount: 12 },
    { id: 4, message: "it's my first post", likesCount: 14 }]


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                <Post message={postData[2].message} likesCount={postData[2].likesCount} />
                <Post message={postData[3].message} likesCount={postData[3].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts;