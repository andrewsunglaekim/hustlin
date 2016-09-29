import React, {Component} from 'react'
import Quest from '../components/Quest'

class QuestList extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let quests = this.props.quests.map((quest)=> {
      return (
        <Quest
          key={quest.id}
          quest={quest} />
      )
    })
    if (quests.length == 0){
      return (
        <div className="noTasks">
          You can’t do shit get some pencils and go to school
        </div>
      )
    } else {
      return (
        <div className="potential quests">
          {quests}
        </div>
      )
    }
  }
}

export default QuestList
