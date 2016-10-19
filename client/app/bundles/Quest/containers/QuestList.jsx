import React, {Component} from 'react'
import Quest from '../components/Quest'

class QuestList extends Component {
  constructor(props){
    super(props)
  }
  render(){
    // TODO: consider hints for progression, but removes anchor from you can't do shit
    let quests = this.props.quests.map((quest)=> {
      return (
        <Quest
          key={quest.id}
          quest={quest}
          processQuest={this.props.startQuest} />
      )
    })
    if (quests.length == 0 && this.props.startQuest){
      return (
        <div className="noTasks">
          <p> You can’t do shit! Get some pencils and go to school. </p>
        </div>
      )
    } else if(quests.length == 0){
      return (
        <div className="noCurrentTasks">
          You should find something to do...
        </div>
      )
    } else {
      return (
        <div className="quests">
          {quests}
        </div>
      )
    }
  }
}

export default QuestList
