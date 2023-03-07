import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";


let postData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 11 },
    { id: 2, message: "it's my first post", likesCount: 22 },
    { id: 3, message: 'Hi, how are you?', likesCount: 12 },
    { id: 4, message: "it's my first post", likesCount: 14 }]

let posts = postData
    .map(post => <Post message={post.message} likesCount={post.likesCount} />)


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
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;