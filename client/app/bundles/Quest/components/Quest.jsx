import React, {Component} from 'react'

class Quest extends Component {
  constructor(props){
    console.log("props coming from quest component: ", props);
    super(props)
  }
  render(){
    let {title} = this.props.quest
    return(
      <div className="quest">
        <span className="questTitle">{title}</span>
      </div>
    )
  }
}

export default Quest
