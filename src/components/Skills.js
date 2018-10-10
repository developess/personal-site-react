import React from "react";
import SkillBox from "./SkillBox";
import skills from "./skillsContent"

export default class Skills extends React.Component {
  state = {
    selectedId: 11,
  }
  handleSelect = id => {
    this.setState({selectedId: id })
  }
  render() {
    const id = this.state.selectedId || false;
    return (
      <div id="skills-container">
        <div className="black-line"></div>
        <div id="skill-list">
        { 
          skills.map((skill) => {
            return <SkillBox key={skill.id} id={skill.id} name={skill.name} class={skill.class} handleSelect={this.handleSelect} /> 
          })
        }
        </div>
        { 
          id ? <div>
                <h4>{skills[id].title ? skills[id].title : skills[id].name}</h4>
                <p>{skills[id].text}</p>
              </div> : ""
        }
      </div>
    );
  }
}
