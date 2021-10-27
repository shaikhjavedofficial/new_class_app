"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var createReactClass = require("create-react-class");

var Header = createReactClass({
  render: function () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src="./images/Screenshot (509).png" alt="Brand" />
          </a>
          <ul className="nav nav-tabs">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  },
});

module.exports = Header;
