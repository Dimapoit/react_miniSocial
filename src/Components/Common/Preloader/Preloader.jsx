import React from "react";
import Spinner from "../../../assets/images/Spinner.gif";

const Preloader = (props) => {
    return (
        <div>
            <img src={Spinner} alt='' />
        </div>
    )
}

export default Preloader;