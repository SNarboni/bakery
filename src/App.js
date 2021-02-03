import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/Button"
import List from "./components/List";
import Pay from "./components/Pay";
import Add from "./components/Add";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'Add',
      items: [],
    }
  }

  selectAdd = () => {
    this.setState({
      activeTab: "Add"
    })
  }

  selectList = () => {
    this.setState({
      activeTab: "List"
    })
  }

  selectPay = () => {
    this.setState({
      activeTab: "Pay"
    })
  }

  tkt = (name,price)=>{
    let newItem ={
      name : name,
      price: price,
    }
    let lastResult = this.state.items;
    lastResult.push(newItem)
    this.setState({items : lastResult})
    console.log(newItem)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <Button isSelected={this.state.activeTab === "Add" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectAdd}>Add</Button>
            <Button isSelected={this.state.activeTab === "List" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectList}>List</Button>
            <Button isSelected={this.state.activeTab === "Pay" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectPay}>Pay</Button>
          </div>
          <div class="row">
            {this.state.activeTab === "Add" && <Add addItem={this.tkt}></Add>}
            {this.state.activeTab === "List" && <List itemList={this.state.items}></List>}
            {this.state.activeTab === "Pay" && <Pay></Pay>}
          </div>
        </header>
      </div>
    );
  }
}

export default App;