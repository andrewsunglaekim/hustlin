import React, {Component} from 'react'
import UserInventory from '../../Inventory/containers/UserInventory'
import QuestList from '../../Quest/containers/QuestList'


// Simple example of a React "smart" component
class HomeBase extends Component {
  constructor(props, context) {
    console.log(props);
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>My Home</h1>
        <h2>My Money: {this.props.user.money}</h2>
        <UserInventory items={this.props.player_items}/>
        <QuestList quests={this.props.eligible_quests}/>
      </div>
    );
  }
}

export default HomeBase
