"use strict"

var React = require('react')

module.exports = React.createClass({
  getInitialState() {
    return { 
      time: new Date() 
    }
  },

  componentDidMount() {
    setInterval(_ => {
      this.setState({ time: new Date() })
    }, 100)
  },

  render() {
    var time = this.state.time.toString()
    var props = JSON.stringify(this.props)

    return (
      <div>
        <h1>{time}</h1>
        <pre>{props}</pre>
      </div>
    )
  }
})
