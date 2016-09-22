import React, {Component} from 'react'

class InventoryItem extends Component {
  constructor(props){
    console.log(props);
    super(props)
  }
  render(){
    let {name, quantity, value} = this.props.item
    if(this.props.itemType === "store"){
      return (
        <div className="item sellable">
          <span>{name}</span><span>Quantity: {quantity}</span>
          <form>
            <input type="text" />
          </form>
        </div>
      )
    } else{
      return(
        <div className="item">
          <span>{name}</span><span>Quantity: {quantity}</span>
        </div>
      )
    }
  }
}

export default InventoryItem
