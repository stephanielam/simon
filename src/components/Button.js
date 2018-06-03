import React, { Component } from 'react';
import '../App.css';

class Button extends Component {
  play_press(e) {
    e.preventDefault();
    this.props.start();
  }
  render() {
    return (
      <button onClick={this.play_press.bind(this)}>
      PLAY
      </button>
    );
  }
}

export default Button;
