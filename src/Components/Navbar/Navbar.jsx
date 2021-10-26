import React from 'react';
import {NavLink} from 'react-router-dom' 

const Navbar = () => {
    return (

        <div id="templatemo_sidebar" >

            <div id="templatemo_header">
                <a href="#"><img src="images/templatemo_logo.png" alt="Mini Social" /></a>
            </div>

            <ul className="navigation">
                <li><NavLink to="/profile" activeClassName='selected'>Profile<span className="ui_icon home"></span></NavLink></li>
                <li><NavLink to="/dialogs" activeClassName='selected'>Dialogs<span className="ui_icon aboutus"></span></NavLink></li>
                <li><NavLink to="/users" activeClassName='selected'>Users<span className="ui_icon aboutus"></span></NavLink></li>
                <li><NavLink to="/news" activeClassName='selected'>News<span className="ui_icon services"></span></NavLink></li>
                <li><NavLink to="/music" activeClassName='selected'>Music<span className="ui_icon gallery"></span></NavLink></li>
                <li><NavLink to="/settings" activeClassName='selected'>Settings<span className="ui_icon contactus"></span></NavLink></li>
            </ul>

        </div>
    )

}

export default Navbar;