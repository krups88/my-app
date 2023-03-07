import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


let posts = props.postData
    .map(post => <Post message={post.message} likesCount={post.likesCount}/>)


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