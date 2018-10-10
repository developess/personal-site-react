import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";

export default class App extends React.Component {
  state = {
    helloAnimate: false,
    aboutAnimate: false,
    contactAnimate: false,
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.setState({helloAnimate : true})
    // let winHeight = window.innerHeight;
    let value = window.scrollY;
    if(value > 100 && value < 200) {
      // console.log('point 1');
      this.setState(() => {
        return { aboutAnimate: true }
      })
    }
    if(value > 1150) {
      // console.log('point 2!!');
      this.setState(() => {
        return { contactAnimate: true }
      })
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header lineState={this.state.helloAnimate}/>
        <About lineState={this.state.aboutAnimate}/>
        <Skills />
        <Contact lineState={this.state.contactAnimate}/>
      </React.Fragment>
    );
  }
}
