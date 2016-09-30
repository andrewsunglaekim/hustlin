import React, {Component} from 'react'
import UserInventory from '../../Inventory/containers/UserInventory'
import QuestList from '../../Quest/containers/QuestList'
import QuestModel from '../../../models/quest'
import Waiting from '../../Actions/components/Waiting'
import Action from '../../../models/action'

// Simple example of a React "smart" component
class HomeBase extends Component {
  constructor(props, context) {
    console.log(props);
    super(props, context);
    this.state = {
      player_items: this.props.player_items,
      user: this.props.user,
      eligible_quests: this.props.eligible_quests,
      current_quests: this.props.current_quests
    };
  }
  startQuest(quest){
    QuestModel.startQuest(quest.id).then((res) => {
      this.setState(res.data)
    })
  }
  ageUser(time){
    Action.ageUser(time).then(res => {
      this.setState(res.data)
    })
  }
  render() {
    return (
      <div>
        <h1>My Home</h1>
        <h2>My Inventory</h2>
        <UserInventory
          items={this.state.player_items}
          money={this.state.user.money}/>
        <h2>Available Tasks</h2>
        <QuestList
          quests={this.state.eligible_quests}
          startQuest={this.startQuest.bind(this)}/>
        <h2>Current Tasks</h2>
        <QuestList
          quests={this.state.current_quests}/>
        <h2>Wait Around</h2>
        <Waiting
          onAgeUser={this.ageUser.bind(this)}/>
      </div>
    );
  }
}

export default HomeBase
