"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require("create-react-class");

var About = createReactClass({
  render: function () {
    return (
      <div>
        <h1>About This Page </h1>
        <p>a simple recipie app</p>
      </div>
    );
  },
});

module.exports = About;
