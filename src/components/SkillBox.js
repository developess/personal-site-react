import React from 'react';

export default class SkillBox extends React.Component {
  select = () => {
    return this.props.handleSelect(this.props.id);
  }
  render () {
    return (
      <button className={this.props.class + " skill-btn"} onClick={this.select}>
        {this.props.name}
      </button>
    )
  }
}