import React from "react"

import { Header }  from "./Header.jsx"
import { Contact } from "./Contact.jsx"
import { Footer }  from "./Footer.jsx"

export class Base extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Contact/>
                <div id='site-container'>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}