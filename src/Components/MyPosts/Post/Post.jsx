import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
                    <img src={props.image} alt='' />
                    <div>
                        <p>{props.message}</p>
                        <span>like</span> <span>{props.likesCount}</span>
                    </div>
                </div>

    );
}

export default Post;
