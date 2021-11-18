import React from "react";
import Spinner from "../../../assets/images/Spinner.gif";
import style from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={style.preloader}>
            <img src={Spinner} alt='' />
        </div>
    )
}

export default Preloader;