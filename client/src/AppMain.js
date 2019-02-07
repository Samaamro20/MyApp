import React, { Component } from "react";
import App from "./App";
import Mine from "./Mine";

import { BrowserRouter, Route } from "react-router-dom";

class AppMain extends Component {
  constructor(props) {
    super(props);
    this.state = { showTime: false };
  }
  change = () => {
    this.setState(
      prevState => {
        return { showTime: !prevState.showTime };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            component={() => (
              <App time={this.state.showTime} change={this.change} />
            )}
          />
          <Route path="/mine" component={Mine} />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppMain;
