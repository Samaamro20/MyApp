import React, { Component } from "react";
import TempField from "./TempField";
class TempCalc extends Component {
  constructor(props) {
    super(props);
    this.state = { f: "", c: "" };
  }

  handleChange(
    type,
    {
      target: { value }
    }
  ) {
    const toConvert = type === "f" ? "c" : "f";
    this.setState({ [type]: value, [toConvert]: this.converter(type, value) });
  }
  converter(type, value) {
    if (type === "c") {
      return (value * 9) / 5 + 32;
    } else {
      return ((value - 32) * 5) / 9;
    }
  }

  render() {
    return (
      <React.Fragment>
        <TempField
          value={this.state.c}
          type="Celcious"
          onChange={e => {
            this.handleChange("c", e);
          }}
        />
        <TempField
          value={this.state.f}
          type="Fahrnhaient"
          onChange={e => {
            this.handleChange("f", e);
          }}
        />
      </React.Fragment>
    );
  }
}

export default TempCalc;
