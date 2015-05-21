"use strict"

var http = require("http")
var aws = require("aws-sdk")

var port = process.env.PORT || 3000
var lambda = new aws.Lambda({
  region: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
})

var params = {
  FunctionName: 'react-lambda',
  Payload: JSON.stringify({ props: { hello: "world" }})
}

var server = http.createServer(function(req, res) {
  if (req.url === "/clock") {
    lambda.invoke(params, function(err, data) {
      if (err) res.end(err.stack)

      var output = JSON.parse(data.Payload)
      res.writeHead(200, {"Content-Type": "text"})
      res.end(output)
    });
  } else {
    res.end("hello\n")
  }
})

server.listen(port, function() {
  console.log("Listening on port:", port)
})
