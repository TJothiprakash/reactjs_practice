import React from "react";

class Example extends React.Component {
  state = {
    name: "John",
    age: 30,
    city: "New York",
  };

  updateName = () => {
    this.setState({ name: "Jane" });
  };

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>City: {this.state.city}</p>
        <button onClick={this.updateName}>Update Name</button>
      </div>
    );
  }
}

export default Example;
