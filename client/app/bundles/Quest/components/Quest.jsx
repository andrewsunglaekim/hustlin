import React, {Component} from 'react'

class Quest extends Component {
  constructor(props){
    console.log("props coming from quest component: ", props);
    super(props)
  }
  onClick(){
    this.props.processQuest()
  }
  render(){
    let {title} = this.props.quest
    return(
      <div className="quest">
        <span className="questTitle">{title}</span>
        <span onClick={() => this.onClick()} className="taskButton">Get Started On this Task</span>
      </div>
    )
  }
}

export default Quest
