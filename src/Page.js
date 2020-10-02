import React from "react";
import ReactDOM from "react-dom";
import diff from "text-diff";
import OutputViewer from "./OutputViewer";

export default class Page extends React.Component {
  compareOutputs = (event) => {
    event.preventDefault();
    const yourCode = this.userInput.value;
    const correctCode = this.correctOutput.value;

    var difference = new diff();

    const htmlToRender = difference.prettyHtml(
      difference.main(yourCode, correctCode)
    );

    ReactDOM.render(
      <React.StrictMode>
        <OutputViewer html={htmlToRender} />
      </React.StrictMode>,
      document.getElementById("output")
    );
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
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
            style={{ width: "49%", height: "90vh", float: "left" }}
          />

          <label>Correct Output:</label>
          <br />
          <input
            type="textarea"
            name="correctOutput"
            defaultValue="Enter the Correct Output here"
            ref={(input) => (this.correctOutput = input)}
            style={{ width: "49%", height: "90vh", float: "left" }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
