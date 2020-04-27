import React, { Component } from 'react';
class Example extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0
    }
  }
  addNum = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <p>this num is {this.state.count}</p>
        <button onClick={this.addNum}>click me</button>
      </div>
    )
  }
}
export default Example;