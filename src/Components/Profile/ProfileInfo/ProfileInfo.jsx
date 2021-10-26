import React from 'react';
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import Preloader from "../../Common/Preloader/Preloader";
//import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return (
            <Preloader/>
        )
    }
    return (
        <div className='profileInfo'>
            {/*<img src='/images/profile.jpg' alt='' width='100%' />*/}
            <div className={s.profileDescription}>
                <img src={props.profile.photos.small ? props.profile.photos.small : userPhoto} alt="01" />
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>*/}
                {/* <div className="btn_more"><a href="#">Visit <span>&raquo;</span></a></div> */}
                <div className="cleaner"></div>
            </div>
        </div>
    )
}

export default ProfileInfo;