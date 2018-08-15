import React from "react";
import "../App.css";

//items = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
const Items = props => {
  if (props.items === []) {
    return null;
  } else {
    return (
      <div className="one">
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
          {props.items.map(item => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
};

export default Items;
