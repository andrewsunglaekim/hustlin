import React, {Component} from 'react'
// Simple example of a React "smart" component
class HomeBase extends Component {
  constructor(props, context) {
    console.log("hello");
    console.log(props);
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <div>
        This is the homebase
      </div>
    );
  }
}

export default HomeBase
