import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Greetings from "./components/Greetings";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Message />
        <Welcome />
        <Greetings name="King Kay" heroName="batman" />
        <p>This is a child prop</p>

        <Greetings name="Kayla" heroName="superman" />
        <button>Action</button>

        <Greetings name="Malibu" heroName="wonderwoman" />
        <Hello />
      </div>
    );
  }
}

export default App;
