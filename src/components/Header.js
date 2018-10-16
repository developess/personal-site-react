import React from "react";
import jessie from "../assets/jessie.png";
import styled from "styled-components";
import colorChange from './ColorChange'

const HeaderDiv = styled.div`
  height: 80vh;
  position: relative;
  margin: 0 auto;
  width: 70%;
  max-width: 820px;
  .appear {
    transition: ${props => props.theme.slowFade};
    opacity: 1 !important;
  }
`;

const JessieHeading = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 0.2rem;
  position: absolute;
  text-align: center;
  margin: 0;
  bottom: calc(-50% + (22.5vmin - 150px) / 2);
  left: calc((45vmin - 224px) / 2);
`;

const ColorChangeBox = styled.div`
  animation: ${colorChange} 8s linear infinite;
  width: 45vmin;
  height: calc(45vmin / 2);
  position: relative;
  margin: 80px 40px 0px 0px;
`;

const Subtext = styled.h3`
  bottom: 10vmax;
  position: absolute;
  width: 45vmin;
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
`;

const ProfilePhoto = styled.img`
  width: 45vmin;
  position: absolute;
  right: 0;
  bottom: 10vh;
  box-shadow: ${props => props.theme.boxShadow};
`;

const BlackLineTop = styled.div`
  width: 54px;
  height: 8px;
  background-color: black;
  position: absolute;
  right: 0;
  margin-top: 50px;
`;

const SingleLinedHeading = styled.h2`
  padding: 8px 0;
  margin: 40px auto 0;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  width: 250px;
  border-bottom: 2px solid black;
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderDiv className={this.props.lineState ? "appear" : ""}>
        <div>
          <SingleLinedHeading>Hello</SingleLinedHeading>
        </div>
        <BlackLineTop />
        <ColorChangeBox>
          <JessieHeading>
            Jessie
            <br />
            Beech
          </JessieHeading>
        </ColorChangeBox>
        <Subtext>&#123; Software Developer &#125;</Subtext>
        <ProfilePhoto src={jessie} alt="profile image" />
      </HeaderDiv>
    );
  }
}
