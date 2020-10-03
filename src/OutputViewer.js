import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function OutputViewer(props) {
  return <div>{ReactHtmlParser(props.html)}</div>;
}
