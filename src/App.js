import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "./components/theme"

const MainWrapper = styled.div`
  box-sizing: border-box;
  font-family: "Karla", sans-serif;
`;

export default class App extends React.Component {
  state = {
    helloAnimate: false,
    aboutAnimate: false,
    contactAnimate: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.setState({ helloAnimate: true });
    let value = window.scrollY;
    if (value > 100 && value < 200) {
      this.setState(() => {
        return { aboutAnimate: true };
      });
    }
    if (value > 1150) {
      this.setState(() => {
        return { contactAnimate: true };
      });
    }
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Header lineState={this.state.helloAnimate} theme={theme}/>
          <About lineState={this.state.aboutAnimate} theme={theme}/>
          <Skills theme={theme} />
          <Contact lineState={this.state.contactAnimate} theme={theme} />
        </MainWrapper>
      </ThemeProvider>
    );
  }
}
