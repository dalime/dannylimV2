import React, { Component } from "react";

export default class CalendlyWidget extends Component {
  componentDidMount() {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }

  render() {
    return (
      <div
        className="calendly-inline-widget"
        data-url={`https://calendly.com/danny-b-lim/15min?hide_event_type_details=1&primary_color=00e676`}
        style={{ minWidth: "320px", height: "630px" }}
      ></div>
    );
  }
}
