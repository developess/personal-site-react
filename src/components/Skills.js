import React from "react";
import SkillBox from "./SkillBox";
import skills from "./skillsContent";
import styled, { ThemeProvider } from "styled-components";

const SkillsWrapper = styled.div`
  background-color: ${props => props.theme.lightBlue};
  padding: 80px 15%;
  margin-top: 140px;
`;

const SkillList = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const BlackLine = styled.div`
  width: 54px;
  height: 8px;
  background-color: black;
  margin-bottom: 40px;
`

export default class Skills extends React.Component {
  state = {
    selectedId: 11
  };
  handleSelect = id => {
    this.setState({ selectedId: id });
  };
  render() {
    const id = this.state.selectedId || false;
    return (
      <ThemeProvider theme={this.props.theme}>
        <SkillsWrapper>
          <BlackLine />
          <SkillList>
            {skills.map(skill => {
              return (
                <SkillBox
                  key={skill.id}
                  id={skill.id}
                  name={skill.name}
                  class={skill.class}
                  handleSelect={this.handleSelect}
                  theme={this.props.theme}
                />
              );
            })}
          </SkillList>
          {id ? (
            <div>
              <h4>{skills[id].title ? skills[id].title : skills[id].name}</h4>
              <p>{skills[id].text}</p>
            </div>
          ) : (
            ""
          )}
        </SkillsWrapper>
      </ThemeProvider>
    );
  }
}
