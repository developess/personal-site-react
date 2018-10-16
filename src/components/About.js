import React from "react";
import styled from "styled-components";
import DoubleLinedHeading from './doubleLinedHeading'

const AboutText = styled.p`
  text-align: center;
  width: 45%;
  margin: 60px auto;
  font-size: 1.1rem;
  line-height: 22px;
`;

const AboutSection = styled.div`
  margin-top: 80px;
  opacity: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  &.appear {
    transition: ${props => props.theme.slowFade};
    opacity: 1 !important;
  }
`;

export default class About extends React.Component {
  render() {
    return (
      <AboutSection className={this.props.lineState ? "appear" : ""}>
          <DoubleLinedHeading>
            About Me
          </DoubleLinedHeading>
        <AboutText>
          I studied Natural Sciences at Cambridge before spending 2 years as
          Financial Controller at a start up. Experimenting with automation got
          me hooked on programming and I went on to join Founders and Coders,
          learning full stack JavaScript in a peer-led, team-first enviroment.
          I’m passionate about writing beautiful, long-lasting code and want to
          build applications that make people’s lives better.
        </AboutText>
      </AboutSection>
    );
  }
}
