import React from 'react'
import style from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (

        <div className={style.header}>

            {/* <ul id="social_box">
         <li><a href="http://www.facebook.com/templatemo"><img src="images/facebook.png" alt="facebook" /></a></li>
         <li><a href="http://www.facebook.com/templatemo"><img src="images/twitter.png" alt="twitter" /></a></li>
         <li><a href="http://www.facebook.com/templatemo"><img src="images/linkedin.png" alt="linkin" /></a></li>
         <li><a href="http://www.facebook.com/templatemo"><img src="images/technorati.png" alt="technorati" /></a></li>
         <li><a href="http://www.facebook.com/templatemo"><img src="images/myspace.png" alt="myspace" /></a></li>
    </ul> */}


            <div className={style.auth}>

                {
                    props.isAuth
                        ? <div>{props.login}
                            <button onClick={props.logout}>Logout</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </div>
    )
}

export default Header;