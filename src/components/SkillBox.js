import React from "react";
import { ThemeProvider } from "styled-components";
import Button from './SkillButton';

class SkillBox extends React.Component {
  select = () => {
    return this.props.handleSelect(this.props.id);
  };
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Button
          className={this.props.class}
          onClick={this.select}
        >
          {this.props.name}
        </Button>
      </ThemeProvider>
    );
  }
}

export default SkillBox;
