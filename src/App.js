import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColourButton from './components/ColourButton';
import Button from './components/Button';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      high_score: 0,
      round: 1,
      sequence: [],
      user_ans: []
    }
  }


  play() {
    function light_up(colour) {
      setTimeout(function() { document.getElementById(colour).className += " lit"; }, 500);
      setTimeout(function() { document.getElementById(colour).className = "colour-button"; }, 1000);
    }

    var new_sequence = this.state.sequence
    while (this.state.sequence.length < this.state.round) {
      var random_int = Math.floor(Math.random() * 4) + 1
      new_sequence.push(random_int);
    }

    this.setState({ sequence: new_sequence })
    this.setState({ user_ans: [] })


    // Light up each colour
    setTimeout(function(){
    new_sequence.forEach(function(section) {
      var colour = "";
      switch(section) {
        case 1:
          colour = "red";
          break;
        case 2:
          colour = "green"
          break;
        case 3:
          colour = "blue";
          break;
        case 4:
          colour = "yellow";
          break;
        default:
      }

        light_up(colour);
      }, 500);
    })
      // function first() {
      //   document.getElementById(colour).className += " lit";
      // }.then(function () {
      //   setTimeout(function(){
      //     document.getElementById(colour).className = "colour-button";
      //   }, 500);
      // });
  }





  check_ans(pos) {
    // Incorrect answer - end game
    if (this.state.sequence[this.state.user_ans.length] !== pos) {
      this.endGame()
    } else {

      // Correct answer - update user answer
      var new_user_ans = this.state.user_ans
      new_user_ans.push(pos)
      this.setState({ user_ans: new_user_ans })

      // If sequence is finished and correct, update round
      if (this.state.user_ans.length === this.state.sequence.length) {
        var new_round = this.state.round+1;
        this.setState({round: new_round}, function () {
          this.play()
        })
      }
    }
  }

  endGame() {
    // Update highscore if needed and reset states
    var score = this.state.round-1;

    if (score > this.state.high_score) {
      this.setState({ high_score: score })
    }
    this.setState({ round: 1 })
    this.setState({ sequence: [] })
    this.setState({ user_ans: [] })
  }

  // <img src={logo} className="App-logo" alt="logo" />
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SIMON</h1>
        </header>
        <div className="container">
          <div className="col-md-6">
            <table>
              <tr>
                <td><ColourButton section="red" colour_select={this.check_ans.bind(this,1)}/></td>
                <td><ColourButton section="green" colour_select={this.check_ans.bind(this,2)}/></td>
              </tr>
              <tr>
                <td><ColourButton section="blue" colour_select={this.check_ans.bind(this,3)}/></td>
                <td><ColourButton section="yellow" colour_select={this.check_ans.bind(this,4)}/></td>
              </tr>
            </table>
          </div>
          <div className="col-md-6">
          <Scoreboard score={this.state.high_score}/>
          <h2> Round: {this.state.round}</h2>
          <Button start={this.play.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
