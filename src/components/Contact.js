import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";

export default class Contact extends React.Component {
  render() {
    return (
      <div className={this.props.lineState ? "appear contact-div" : "contact-div"}>
        <div className="double-lined"><h2 >Contact</h2></div>
        <p>hello@jessiebeech.com</p>
        <div id="socials-div">
        <a href="https://github.com/developess" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github icon" className="social-icon"/></a>
        <a href="https://www.linkedin.com/in/jessie-beech/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedIn icon" className="social-icon"/></a>
        <a href="https://www.instagram.com/jessiebeech3/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram icon" className="social-icon"/></a>
        </div>
      </div>
    );
  }
}
