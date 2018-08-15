import React, { Component } from "react";
import "../App.css";

import axios from "axios";
import Items from "./Items";

//categories = "https://davids-restaurant.herokuapp.com/categories.json";
class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      givenCateg: null,
      items: []
    };
  }

  componentDidMount() {
    axios
      .get("https://davids-restaurant.herokuapp.com/categories.json")
      .then(res => {
        this.setState({
          categories: res.data
        });
      })
      .catch(err => console.log(err));
  }

  chooseItem = (short_name, e) => {
    axios
      .get(
        "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +
          short_name
      )
      .then(res => {
        this.setState({
          items: res.data["menu_items"]
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="list">
          <ul>
            {this.state.categories.map(categ => {
              return (
                <li
                  onClick={this.chooseItem.bind(this, categ.short_name)}
                  key={categ.id}
                >
                  {categ.name} - ({categ.short_name})
                </li>
              );
            })}
          </ul>
        </div>
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default Categories;
