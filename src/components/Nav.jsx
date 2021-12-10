/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {ReactComponent as Logo} from '../svgs/DMLogo.svg';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="nav">
                <h1 className="hidden">Doctor Mike A-Live Tour</h1>
                <div className="container nav-content">
                    <Logo/>
                    <div className="nav-link-container">
                        <a className="nav-links" href="mailto:doctormikemedia@gmail.com">Contact</a>
                        <a className="nav-links" href="https://www.doctormikemedia.com">Doctor Mike Website</a>
                    </div>
                </div>
            </nav>
        )
    } 
}

export default NavBar