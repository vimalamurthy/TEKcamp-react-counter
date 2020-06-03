import React, { Component } from 'react';
import Display from './Display';
//import ButtonPad from './ButtonPad';

class Counter extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    let Decr = this.state.count;
    if (Decr > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className='counter'>
        <span> {this.formatCount()}</span>
        <Display />
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
