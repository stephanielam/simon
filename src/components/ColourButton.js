import React, { Component } from 'react';
import '../App.css';

class ColourButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      lit: false
    }
  }

  press() {
    console.log("PRESS")
    this.setState({status: !this.state.lit})
    this.props.colour_select();
  }

  light_up(){
    console.log("LIT")
    this.setState({status: !this.state.lit})
    this.props.colour_select();
  }

  render() {
    let btn_class = "colour-button"
    if (this.state.lit){
      btn_class = "colour-button lit"
    } else if (this.state.pressed){
      btn_class = "colour-button pressed"
    }

    return (
      <div className={btn_class} id={this.props.section} onClick={this.press.bind(this)}>
      </div>
    );
  }
}

export default ColourButton;
