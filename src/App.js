import React, { Component } from "react";
import "./App.css";

import Categories from "./components/Categories";


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="list">
            <h1>Categories:</h1>
            <Categories />
        </div>
      </div>
    );
  }
}

export default App;
