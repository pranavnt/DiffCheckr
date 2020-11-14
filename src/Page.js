//imports
import React from "react";
import ReactDOM from "react-dom";
import diff from "text-diff";
import OutputViewer from "./OutputViewer";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div style={{ width: "100%" }}>
        <form
          onSubmit={this.compareOutputs}
          style={{ height: "100vh", width: "100%", padding: "10px" }}
        >
          <label>Your Input:</label>
          <br />
          <textarea
            name="userInput"
            className="form-control"
            defaultValue="Enter your input here"
            ref={(input) => (this.userInput = input)}
            style={{
              height: "44vh",
              width: "100%",
              padding: "5px",
              whiteSpace: "pre-wrap"
            }}
          />

          <br />
          <label>Correct Output:</label>
          <textarea
            name="correctOutput"
            defaultValue="Enter the Correct Output here"
            ref={(input) => (this.correctOutput = input)}
            className="form-control"
            style={{
              height: "44vh",
              width: "100%",
              padding: "5px",
              whiteSpace: "pre-wrap"
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
