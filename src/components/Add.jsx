import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      price: 1,
    };
  }

  updateProductName = (e) => {
    this.setState({ productName: e.target.value });
    console.log(this.state.productName)
  };
  
  updatePrice = (e) => {
    this.setState({ price: e.target.value });
    console.log(this.state.price)
  };

  Add = ()=>{
    this.props.addItem(this.state.productName,this.state.price)
  }


  render() {
    return (
      <div>
        <input type="text" onChange={this.updateProductName} /> <br />
        <input
          type="range"
          min="1"
          max="10"
          onChange={this.updatePrice}
          value={this.state.price}
        />
        <p>{this.state.price}€</p>
        <button onClick={this.Add} className="btn btn-primary">Add</button>
      </div>
    );
  }
}

export default Add;
