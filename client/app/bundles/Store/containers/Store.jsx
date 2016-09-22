import React, {Component} from 'react'

class Store extends Component{
  constructor(props){
    console.log(props);
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        This is the store
      </div>
    )
  }
}


export default Store
