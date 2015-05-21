"use strict"

var fs = require("fs")
var React = require("react")
var nodeJSX = require("node-jsx").install({ extension: ".jsx", harmony: true })

var Clock = require("./clock")
var clientJS = fs.readFileSync("./bundle.js")

function render(props) {
  var clock = React.createElement(Clock, props)
  var component = React.renderToString(clock)

  var html = [
    "<!doctype html>",
    "<html>",
      "<head>",
        "<script>",
          clientJS,
        "</script>",
      "</head>",
      "<body>",
        component,
      "</body>",
    "</html>"
  ].join('')

  return html
}

exports.handler = function(event, context) {
  var props = event.props || {}

  try {
    var output = render(props)
    context.succeed(output)
  } catch(err) {
    context.fail(err)
  }

  context.done()
}
