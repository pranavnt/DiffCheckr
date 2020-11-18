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
            defaultValue="This program tells you how many days\nit will be until your next birthday.\n\nPlease enter today's date:\nWhat is the month (1-12)? 2\nWhat is the day   (1-28)? 4\n2/4 is day #35 of 365.\n\nPlease enter your birthday:\nWhat is the month (1-12)? 10\nWhat is the day   (1-31)? 12\n10/12 is day #285 of 365.\n\n\nYour next birthday is in 250 days."
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
