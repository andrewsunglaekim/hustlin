import React, {Component} from 'react'
import UserInventory from '../../Inventory/containers/UserInventory'

// Simple example of a React "smart" component
class HomeBase extends Component {
  constructor(props, context) {
    console.log("hello");
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <div>
        This is the homebase
        <UserInventory items={this.props.player_items}/>
      </div>
    );
  }
}

export default HomeBase
