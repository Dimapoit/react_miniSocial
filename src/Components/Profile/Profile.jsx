import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostsContainer from "../MyPostsContainer/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className='profile'>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer/>
        </div>
    )

}

export default Profile;