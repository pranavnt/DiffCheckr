import React from "react";
import { Diff } from "../node_modules/text-diff/diff";

export default class Page extends React.Component {
  compareOutputs = (event) => {
    event.preventDefault();
    const yourCode = this.userInput.value;
    const correctCode = this.correctOutput.value;
  };

  render() {
    return (
      <form
        onSubmit={this.compareOutputs}
        style={{ padding: "10px", height: "100vh", width: "100%" }}
      >
        <label>Your Input:</label>
        <br />
        <input
          type="textarea"
          name="userInput"
          defaultValue="Hi!"
          ref={(input) => (this.userInput = input)}
          style={{ width: "47%", height: "100vh", float: "left" }}
        />

        <label>Correct Output:</label>
        <br />
        <input
          type="textarea"
          name="correctOutput"
          defaultValue="Enter the Correct Output here"
          ref={(input) => (this.correctOutput = input)}
          style={{ width: "47%", height: "100vh", float: "left" }}
        />
        <input type="submit" />
      </form>
    );
  }
}
