import React, { Component } from "react";
import "./App.css";

import Categories from "./components/Categories";


class App extends Component {
  render() {
    return (
      <div>
            <h1>Categories:</h1>
            <Categories />
      </div>
    );
  }
}

export default App;
