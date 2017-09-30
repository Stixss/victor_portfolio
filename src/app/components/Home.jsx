import React from "react"

import IMAGES from "../../images"
var req = require.context('../../assets/images/test/tests/', true)

export class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            images: IMAGES
        }
    }

    render(){
        return(
            <div>
                <div id="intro">
                    <h3>
                        -Victor, ui designer, ux padawan,<br/>
                        mordu de création visuelle et amateur de tacos !
                    </h3>
                </div>
                <div id="home-galery">
                    { 
                    Object.keys( this.state.images ).map(
                        (idx) => {
                            <li key={idx}>
                                <img url={this.state.images[idx].path} alt="test"/>
                                {console.log(this.state.images[idx].path)}
                            </li>
                        }
                      )
                    }
                </div>
            </div>
        );
    }
}