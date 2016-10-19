import React, {Component} from 'react'

class Quest extends Component {
  constructor(props){
    console.log("props coming from quest component: ", props);
    super(props)
  }
  onClick(){
    this.props.processQuest(this.props.quest)
  }
  render(){
    let {title, req_time} = this.props.quest
    if (this.props.processQuest) {
      return(
        <div className="quest">
          <span className="questTitle">{title} - Will take {req_time} days </span>
          <button onClick={() => this.onClick()} className="taskButton">Get Started On this Task</button>
        </div>
      )
    } else {
      return (
        <div className="quest">
          <span className="questTitle">{title}</span>
           </div>
      )
    }
  }
}

export default Quest
