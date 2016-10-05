import React, {Component} from 'react'

class Waiting extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: ""
    }
  }
  onChange(event){
    this.setState({
      time: event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    if (parseInt(this.state.time)){
      this.props.onAgeUser(parseInt(this.state.time))
    }
    this.setState({
      time: ''
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            className="waitInput"
            type='text'
            onChange={e => this.onChange(e)}
            value={this.state.time}
            placeholder="Enter the # of days to wait."
            />
        </form>
      </div>
    )
  }
}

export default Waiting
