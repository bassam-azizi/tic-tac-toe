import React, { Component } from "react";
import Board from "./board";

class Game extends Component {
  state = {
    xIsNext: true,
    stepNumber: 0,
    history: [{ squares: Array(9).fill(null) }]
  };

  handelClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "0";
    this.setState({
      history: history.concat({
        squares: squares
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={i => this.handelClick(i)} squares={current.squares} />
        </div>
      </div>
    );
  }
}

export default Game;
