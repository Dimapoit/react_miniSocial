import React from "react";
import style from './User.module.css'

const User = (props) => {
    return (
        <div className={style.userItem}>
            {/* <div className={style.avatar}>
                <img src={props.user.imagePath } alt='' />
                <button>follow</button>
            </div>
            <div className={style.userInfo}>
                <div>
                    <p>fullName</p>
                    <p>Status</p>
                </div>
                <div>
                    <p>fullName</p>
                    <p>Status</p>
                </div>
            </div> */}
        </div>
    )
}
export default User;