import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: "123n123lkj4235",
          name: "Linda",
        },
        {
          id: "123n123j4235",
          name: "Frank",
        },
        {
          id: "123n123abclkj4235",
          name: "Jacky",
        },
        {
          id: "n123lkj4235",
          name: "Adam",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
