import React, {Component} from 'react'
import Quest from '../components/Quest'

class QuestList extends Component {
  constructor(props){
    super(props)
  }
  render(){
    var quests = this.props.quests.map((quest)=> {
      return (
        <Quest
          key={quest.id}
          quest={quest} />
      )
    })
    return (
      <div>
        {quests}
      </div>
    )
  }
}

export default QuestList
