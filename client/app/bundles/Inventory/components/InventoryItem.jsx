import React, {Component} from 'react'

class InventoryItem extends Component {
  render(){
    let {name, quantity, value} = this.props.item
    return(
      <div className="item">
        <span>{name}</span><span>Quantity: {quantity}</span>
      </div>
    )
  }
}

export default InventoryItem
