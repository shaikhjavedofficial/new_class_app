"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require("create-react-class");

var Home = createReactClass({
  render: function () {
    return (
      <div className="hm">
        <h1>My Home Comp</h1>
      </div>
    );
  },
});

module.exports = Home;
