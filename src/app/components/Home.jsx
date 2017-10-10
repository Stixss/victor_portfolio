import React from "react"
import { Link } from "react-router"

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

        var list = {

        }

        return(
            <div>
                <div id="intro">
                    <h3>
                        -Victor, ui designer, ux padawan,<br/>
                        mordu de création visuelle et amateur de tacos !
                    </h3>
                </div>
                <div id="home-galery">
                    <Link to="projets/1">
                        <img src="../../assets/images/galery/1.png" alt=""/>
                    </Link>
                    <Link to="projets/2">
                        <img src="../../assets/images/galery/2.png" alt=""/>
                    </Link>
                    <img src="../../assets/images/galery/3.png" alt=""/>
                    <img src="../../assets/images/galery/4.png" alt=""/>
                    <img src="../../assets/images/galery/5.png" alt=""/>
                    <img src="../../assets/images/galery/6.png" alt=""/>
                    <img src="../../assets/images/galery/7.png" alt=""/>
                    <img src="../../assets/images/galery/8.png" alt=""/>
                    <img src="../../assets/images/galery/9.png" alt=""/>
                    <img src="../../assets/images/galery/10.png" alt=""/>
                    <img src="../../assets/images/galery/11.png" alt=""/>
                    <img src="../../assets/images/galery/12.png" alt=""/>
                </div>
            </div>
        );
    }
}