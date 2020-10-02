import React from "react";

class InputForm extends React.Component {
  compareOutputs = (event) => {
    event.preventDefault();
    alert(this.input.value);
  };

  render() {
    return (
      <form onSubmit={this.compareOutputs}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          defaultValue="cool-guy"
          ref={(input) => (this.input = input)}
        />
      </form>
    );
  }
}

export default InputForm;
