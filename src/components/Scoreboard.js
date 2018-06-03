import React, { Component } from 'react';
import '../App.css';

class Scoreboard extends Component {
  render() {
    return (
      <div id="scoreboard">
        <h3>
        {this.props.score}
        </h3>
      </div>
    );
  }
}

export default Scoreboard;
