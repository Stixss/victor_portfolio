import React from "react"

export class Contact extends React.Component{

    close_menu(){
        $("#contact *").animate({opacity: 0},400)
        $("#contact").delay(400).animate({height: "0px"},400).css({display: 'none'})
    }

    render(){
        return(
            <div id="contact">
                <div className="box">
                    <p><strong>Victor Prevost,</strong> Paris 75012</p>
                </div>
                <div className="box">
                    <img src="../../assets/images/pictos/ico_phone_white.svg" alt="icone phone"/>
                    <p>Phone: 06 37 92 69 16</p>
                </div>
                <div className="box">
                    <img src="../../assets/images/pictos/ico_mail_white.png" alt="icone mail"/><a href="mailto:victorprevo@gmail.com"> victorprevo@gmail.com</a>
                    <div className="close" id="closecontact" onClick={this.close_menu}><div className="stripe"></div></div>
                </div>
            </div>
        );
    }
}