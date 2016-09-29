import React, {Component} from 'react'
import UserInventory from '../../Inventory/containers/UserInventory'
import QuestList from '../../Quest/containers/QuestList'
import QuestModel from '../../../models/quest'

// Simple example of a React "smart" component
class HomeBase extends Component {
  constructor(props, context) {
    console.log(props);
    super(props, context);
    this.state = {};
  }
  startQuest(quest){
    QuestModel.startQuest(quest.id).then(function(res){
      console.log(res);
    })
  }
  render() {
    return (
      <div>
        <h1>My Home</h1>
        <h2>My Inventory</h2>
        <UserInventory
          items={this.props.player_items}
          money={this.props.user.money}/>
        <h2>Available Tasks</h2>
        <QuestList
          quests={this.props.eligible_quests}
          startQuest={this.startQuest.bind(this)}/>
      </div>
    );
  }
}

export default HomeBase
