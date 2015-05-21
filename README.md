# react-lambda-demo

Demo using [aws lambda](http://aws.amazon.com/lambda/) to render a React app.

## install dependencies

```
$ npm install
$ npm run build
```

## setup

* register for AWS and create a new user with the policy to `lambda:InvokeFunction`
* include this users AWS credentials in the env (see server.js)
* upload `lambda.zip` to aws lambda using the function name `react-lambda` (TODO: automate this)

## run

```
$ npm start
$ open http://localhost:3000
```
