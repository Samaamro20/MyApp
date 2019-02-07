import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import List from "./List";
import Clock from "./Clock";
import TempCalc from "./TempCalc";
class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      items: [],
      text: "",
      showTime: false,
      data: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    //  this.toggleTime = this.toggleTime.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    this.setState({
      items: this.state.items.concat({ text: this.state.text, checked: false }),
      text: ""
    });
  }

  handleDelete(id) {
    const newItems = this.state.items.filter((item, index) => index !== id);
    console.log(newItems);
    this.setState({ items: newItems });
  }
  componentDidMount() {
    this.toggleTime();
    fetch("/get_data")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ data });
      });
  }
  toggleTime(e) {
    console.log("E is", e);
    this.setState(state => {
      return { showTime: !state.showTime };
    });
  }

  render() {
    // const hello = React.createElement(
    //   "h1",
    //   {
    //     onClick: () => {
    //       console.log("Hello world");
    //     }
    //   },
    //   "Hello  world"
    // );
    // const wrapper = React.createElement("div", {}, "I am just a text", hello);
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            type="text"
          />
          <button>Add an item</button>
        </form>
        <button onClick={this.props.change}>
          Click me to {this.props.time ? "Hide" : "Show"} time
        </button>
        <List handleDelete={this.handleDelete} lists={this.state.items} />
        {this.props.time && <Clock />}
        <TempCalc />
        <a href="/mine">To mine Please</a>
        <span> {process.env.NODE_ENV}</span>
        <span> {process.env.REACT_APP_SECRET_CODE}</span>
        {this.state.data &&
          this.state.data.data.map(person => {
            return (
              <span>
                <br />
                Name : {person.name} Age:{person.age}
              </span>
            );
          })}
      </div>
    );
  }
}

export default App;
