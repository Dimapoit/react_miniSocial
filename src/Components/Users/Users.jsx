import React from "react";
import style from './User/User.module.css'
import userPhoto from '../../assets/images/user.png'
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {
                props.isFetching ? <Preloader/> : null
            }
            <div>
                {
                    pages.map(p => <span
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                        className={props.currentPage === p ? style.selectedPage : ''}>{p}</span>)
                }
            </div>
            {
                props.users.map(u => {
                    return (
                        <div className={style.users} key={u.id}>
                            <div className={style.userItem}>
                                <div className={style.avatar}>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img className={style.user}
                                             src={u.photos.small != null ? u.photos.small : userPhoto} alt=''/>
                                    </NavLink>
                                    <div className={style.btn}>
                                        {u.followed
                                            ? <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => {
                                                // props.toggleFollowingProgress(true, u.id);
                                                // usersAPI.unfollowUser(u.id)
                                                //     .then(response => {
                                                //         if (response.data.resultCode === 0) {
                                                //             props.unfollow(u.id)
                                                //         } else {
                                                //             alert(response.data.messages[0])
                                                //         }
                                                //         props.toggleFollowingProgress(false, u.id);
                                                //     })
                                                props.unfollow(u.id)
                                            }}>unFollow</button>
                                            : <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => {
                                                // props.toggleFollowingProgress(true, u.id);
                                                // usersAPI.followUser( u.id)
                                                //     .then(response => {
                                                //         console.log(response)
                                                //         if (response.data.resultCode === 0) {
                                                //             props.follow(u.id)
                                                //         } else {
                                                //             alert(response.data.messages[0])
                                                //         }
                                                //         props.toggleFollowingProgress(false, u.id);
                                                //     })
                                                props.follow(u.id)
                                            }}>follow</button>
                                        }
                                    </div>
                                </div>

                                <div className={style.userInfo}>
                                    <div>
                                        <p>{u.name}</p>
                                        <p>{u.status}</p>
                                    </div>
                                    <div>
                                        <p>u.location.city</p>
                                        <p>u.location.country</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;
