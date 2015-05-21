var React = require("react")
var Clock = require("./clock.jsx")

document.addEventListener("DOMContentLoaded", function() {
  var body = document.querySelector("body")
  React.render(<Clock />, body)
})
