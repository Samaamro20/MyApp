import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    console.log("I am mounted");
    this.timerId = setInterval(() => {
      this.timer();
    }, 1000);
  }
  componentWillUnmount() {
    console.log("I will be removed");
    clearInterval(this.timderId);
  }
  timer() {
    this.setState({ time: new Date() });
  }
  render() {
    return (
      <div>
        <h3>The Clock</h3>
        <h3>Time now is: {this.state.time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}
export default Clock;
