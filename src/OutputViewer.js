import React from "react";
import ReactHtmlParser from "react-html-parser";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OutputViewer(props) {
  return <div className="border">{ReactHtmlParser(props.html)}</div>;
}
