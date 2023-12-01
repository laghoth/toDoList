import React, { Component } from "react";
import Listitems from "./components/listitems/Listitems";
import Additem from "./components/additem/Additem";
import "./App.css";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "othmane", age: 27 },
      { id: 2, name: "mohamed", age: 30 },
      { id: 3, name: "hanane", age: 33 },
      { id: 4, name: "meriem", age: 34 },
    ],
  };

  deleteItem = (id) => {
    let itemsD = this.state.items;
    let i = itemsD.findIndex((itm) => itm.id === id);
    itemsD.splice(i, 1);
    this.setState({ itemsD });
    // let itemsf = this.state.items.filter(item => {
    //   return item.id !== id;
    // });
    // this.setState({itemsf});
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState(items);
  };
  showMessage = () => {
    alert("input empty");
  };
  render() {
    return (
      <div className="App">
        <Listitems items={this.state.items} deleteItem={this.deleteItem} />
        <br />
        <Additem addItem={this.addItem} showMessage={this.showMessage} />
      </div>
    );
  }
}

export default App;
