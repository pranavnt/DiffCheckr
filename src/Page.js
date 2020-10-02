import { left } from "inquirer/lib/utils/readline";
import React from "react";
import { Diff } from "../node_modules/diff-sequences";

export default class Page extends React.Component {
  compareOutputs = (event) => {
    event.preventDefault();
    alert(this.input.value);
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "50%", float: left }}>
        <form onSubmit={this.compareOutputs}>
          <label htmlFor="username">Your Input:</label>
          <br />
          <input
            type="textarea"
            name="userInput"
            defaultValue="Hi!"
            ref={(input) => (this.input = input)}
            style={{ width: "100%", height: "45vh" }}
          />
        </form>
      </div>
    );
  }
}
