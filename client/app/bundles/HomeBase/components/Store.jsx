import React, {Component} from 'react'

class Store extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let {id, name} = this.props.store
    return (
      <div className='storeItem'>
        <a href={`/store/${id}`}>
          <button className="store">{name}</button>
        </a>
      </div>
    )
  }
}

export default Store
