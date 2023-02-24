import React from "react";
import s from './Post.module.css';

const  Post = (props) => {


    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FDAXbcfJNn05sKOBRulVNZhz5v5DMN6tPg&usqp=CAU' />
            {props.message} 
            <div>
                <span>like {props.likeCount}</span>
            </div>

        </div>
    );
}

export default Post; 