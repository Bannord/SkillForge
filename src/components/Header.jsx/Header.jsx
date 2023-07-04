import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {

    return (
        <div className="header_wrapper">
            
            <div className="left_side_bar">
                <div className="logo_wrapper">
                    <img src="./logo.svg" alt="hammer" className="logo_img" />
                </div>
                <div className="title_logo">
                    <span>Grippo</span>
                </div>
            </div>
            <div className="right_side_bar">
                <ul className="wrapper_lists">
                    
                    <li className="item">
                    <Link to="/users">Users</Link>
                    </li>
                    <li className="item">
                    <Link to="/bank">Bank System</Link>
                    </li>
                    <li className="item">TO BE CONTINUED</li>
                    <li className="item">TO BE CONTINUED</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;