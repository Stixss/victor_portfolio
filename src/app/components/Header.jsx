import React from "react"
import { Link, activeClassName } from "react-router"

export class Header extends React.Component{

    show_menu(){
        $("#contact").css({display: 'flex'}).animate({height: "70px"},400)
        $("#contact *").delay(400).animate({opacity: 1},400)
    }

    render(){
        return(
            <div>
                <div id="header">
                    <div className="header-container block30 block-left">
                        <Link className="navlink" activeClassName="active" to="/projets">projets</Link>
                    </div>
                    <div className="logo-container block40">
                        <Link className="navlink no-after" to="/home">
                            <div className="logo">
                                <img src="../../assets/images/logo.gif" alt=""/>
                            </div>
                        </Link>
                        {/* { replace with the logo } */}
                    </div>
                    <div className="menu-container block30 block-right">
                        <Link className="navlink" activeClassName="active" to="/cv">cv</Link>
                        <a className="navlink" id="showcontact" onClick={this.show_menu}>contact</a>
                    </div>
                </div>
                <div id="header-mobile">
                    <div className="mobile-block-left">
                        <Link className="navlink no-after" to="/home">
                            <div className="logo">
                                <img src="../../assets/images/logo.gif" alt=""/>
                            </div>
                        </Link>
                    </div>
                    <div className="mobile-block-right">
                        <div className="hamburger">
                            <div className="span"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}