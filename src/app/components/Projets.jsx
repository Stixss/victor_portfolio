import React from "react";

export class Projets extends React.Component{
    render(){
        return(
            <div>
                Projets
                <img src={"../../assets/images/galery/" + this.props.params.id+ ".png"} alt=""/>
            </div>
        );
    }
}