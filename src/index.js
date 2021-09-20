$ = jQuery = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");

var Home = require("./js/components/home/HomePage.jsx");

ReactDOM.render(<Home />, document.getElementById("app"));

// if we are not using react uncomment these line
// var App = console.log('Browserify is working');
// var test;
// module.exports = App;
