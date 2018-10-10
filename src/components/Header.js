import React from "react";
import jessie from "../assets/jessie.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className={this.props.lineState ? "appear header-div" : "header-div"}>
        <div>
          <h2 className="single-lined">Hello</h2>
        </div>
        <div className="black-line-top" />
        <div className="blue-box">
          <h1 id="jessie-beech">
            Jessie
            <br />
            Beech
          </h1>
        </div>
        <h3 id="dev-h3">&#123; Software Developer &#125;</h3>
        <img src={jessie} alt="profile image" id="profile-img"/>
      </div>
    );
  }
}
