import React from "react";

export class Projets extends React.Component{
    render(){
        return(
            <div id="projets">
                <div className="projets-menu">

                </div>
                <div className="projets-images">
                    <img className="img" src={"../../assets/images/galery/" + this.props.params.id+ ".png"} alt=""/>
                </div>
                <div className="projets-description">

                </div>
            </div>
        );
    }
}