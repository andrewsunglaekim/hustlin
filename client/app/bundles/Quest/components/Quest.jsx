import React, {Component} from 'react'

class Quest extends Component {
  constructor(props){
    console.log("props coming from quest component: ", props);
    super(props)
  }
  render(){
    return(
      <div className="quest">
        This is a quest component
      </div>
    )
  }
}

export default Quest
