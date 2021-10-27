$ = jQuery = require("jquery");
// if we are not using react uncomment these line
// var App = console.log('Browserify is working');
// var test;
// module.exports = App;
var React = require("react");
var ReactDOM = require("react-dom");
var Home = require("./js/components/HomePage.jsx");
var About = require("./js/components/About.jsx");
var Header = require("./js/components/Header.jsx");
var createReactClass = require("create-react-class");

var App = createReactClass({
  render: function () {
    var Child;
    switch (this.props.route) {
      case "About":
        Child = About;
      default:
        Child = Home;
        console.log("home is loaded");
    }
    return (
      <div>
        <Header> {console.log("header is loaded")} </Header> <Child />
      </div>
    );
  },
});

function _routeMe() {
  var route = window.location.hash.substr(1);
  ReactDOM.render(<Home />, document.getElementById("app"));
}

window.addEventListener("hashchange", _routeMe);
_routeMe();

module.exports = App;
