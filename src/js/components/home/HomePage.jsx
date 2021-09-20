"use strict";
var React = require("react");
var ReactDOM = require("react-dom");

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <h1>My Home Comp</h1>
        {console.log("haha")}
      </div>
    );
  },
});

module.exports = Home;
