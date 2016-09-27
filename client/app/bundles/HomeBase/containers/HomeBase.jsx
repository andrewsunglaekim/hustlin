import React, {Component} from 'react'
import UserInventory from '../../Inventory/containers/UserInventory'

// Simple example of a React "smart" component
class HomeBase extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>My Home</h1>
        <h2>My Money: {this.props.user.money}</h2>
        <UserInventory items={this.props.player_items}/>
      </div>
    );
  }
}

export default HomeBase
