import React from "react"
import { Link, activeClassName } from "react-router"

export class Header extends React.Component{

    show_menu(){
        $("#contact").animate({height: "70px"},400)
        $("#contact *").delay(400).animate({opacity: 1},400)
    }

    render(){
        return(
            <div id="header">
                <div className="header-container block30 block-left">
                    <Link className="navlink" activeClassName="active" to="/projets">projets</Link>
                </div>
                <div className="logo-container block40">
                    <Link className="navlink" to="/home">
                    <div className="logo">
                        <img src="../../assets/images/logo.png" alt=""/>
                    </div>
                    </Link>
                    {/* { replace with the logo } */}
                </div>
                <div className="menu-container block30 block-right">
                    <Link className="navlink" activeClassName="active" to="/cv">cv</Link>
                    <a className="navlink" id="showcontact" onClick={this.show_menu}>contact</a>
                </div>
            </div>
        );
    }
}