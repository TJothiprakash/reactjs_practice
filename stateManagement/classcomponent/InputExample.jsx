import React from "react";

class InputExample extends React.Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <p>You typed: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default InputExample;
