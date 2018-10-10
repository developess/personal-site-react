import React from 'react';

export default class About extends React.Component {
  render () {
    return (
      <div className={this.props.lineState ? "appear about-section" : "about-section"}>
        <div className="double-lined"><h2>About Me</h2></div>
        <p id="about-text">I studied Natural Sciences at Cambridge before spending 2 years as Financial Controller at a start up. Experimenting with automation got me hooked on programming and I went on to join Founders and Coders,  learning full stack JavaScript in a peer-led, team-first enviroment. I’m passionate about writing beautiful, long-lasting code and want to build applications that make people’s lives better. </p>
      </div>
    )
  }
}