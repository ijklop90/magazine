import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png'


const MainPage = () => {
    return(
        <div className="row">
            <div className="col s12 m4 offset-m4">
                <div>
                <img className="main-logo" alt="logo" src={logo}></img>
                <span className="main-logo-text">Shoppy Alliance</span>
                </div>
                <Link to='/magazine/cat'>
                    <div to className="waves-effect   main-btn platform waves-light btn">
                    <i className="material-icons">shop</i> <span>К покупкам</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MainPage;