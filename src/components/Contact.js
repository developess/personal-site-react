import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import styled from "styled-components";
import DoubleLinedHeading from './doubleLinedHeading'

const ContactDiv = styled.div`
  margin: 80px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  opacity: 0;
  p {
    margin: 65px 0 50px 0;
  }
  &.appear {
    transition: ${props => props.theme.slowFade};
    opacity: 1 !important;
  }
`;
const SocialIcon = styled.img`
  height: 50px;
  width: 50px;
  margin: 15px;
  border-radius: 12px;
  transition: ${props => props.theme.steady};
  :hover {
    background: ${props => props.theme.pink};
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export default class Contact extends React.Component {
  render() {
    return (
      <ContactDiv className={this.props.lineState ? "appear " : ""}>
        <DoubleLinedHeading>
          Contact
        </DoubleLinedHeading>
        <p>hello@jessiebeech.com</p>
        <div id="socials-div">
          <a
            href="https://github.com/developess"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={github} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jessie-beech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={linkedin} alt="linkedIn icon" />
          </a>
          <a
            href="https://www.instagram.com/jessiebeech3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={instagram} alt="Instagram icon" />
          </a>
        </div>
      </ContactDiv>
    );
  }
}
