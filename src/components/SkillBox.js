import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
font-family: $font-stack;
font-size: 1rem;
letter-spacing: 0.1rem;
border: none;
padding: 10px 20px;
margin: 10px;
transition: $steady;
box-shadow: $box-shadow;
`

class SkillBox extends React.Component {
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

export default SkillBox