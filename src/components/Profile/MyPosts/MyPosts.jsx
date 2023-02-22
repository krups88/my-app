import React from "react";
import s from './MyPost.module.css';

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
                <div className={s.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FDAXbcfJNn05sKOBRulVNZhz5v5DMN6tPg&usqp=CAU'/>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    )
}

export default MyPosts;