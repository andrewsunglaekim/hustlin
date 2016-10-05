import React, {Component} from 'react'

class InventoryItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: ""
    }
  }
  onChange(event){
    this.setState({
      quantity: event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    if (this.props.itemType === "userInStore" && this.isInvalidQuantity()){
      alert("you don't have that many in your inventory")
    } else if (this.isInvalidQuantity() || this.isNotEnoughMoney()){
      alert("Not enough of that item, or not enough money")
    } else {
      let joinItemId = this.props.item.id
      let quantity = parseInt(this.state.quantity)
      this.setState({
        quantity: ""
      })
      this.props.onTransaction(joinItemId, quantity)
    }
  }
  isInvalidQuantity(){
    return this.state.quantity > this.props.item.quantity
  }
  isNotEnoughMoney(){
    if (this.props.itemType === "userInStore"){return false}
    let money = this.props.playerMoney
    let moneyOwed = this.state.quantity * this.props.item.value
    let notEnoughMoney = money < moneyOwed
    return notEnoughMoney
  }
  render(){
    let {name, quantity, value} = this.props.item
    if(this.props.itemType === "store"){
      return (
        <div className="storeItems">
          <span>{name}</span>
          <span className="quant">Quantity: {quantity}</span>
          <span className="value">Value: {value}</span>
          <form onSubmit={e => this.onSubmit(e)} >
            <input
              type="text"
              placeholder="Enter quantity to buy."
              onChange={e => this.onChange(e)}
              value={(this.state.quantity)}/>
          </form>
        </div>
      )
    } else if (this.props.itemType === "userInStore") {
      value = parseInt(0.75 * value)
      return (
        <div>
          <span>{name}</span>
          <span className="quant">Quantity: {quantity}</span>
          <span className="value">Value: {value}</span>
          <form onSubmit={e => this.onSubmit(e)} >
            <input
              type="text"
              placeholder="Enter quantity to sell."
              onChange={e => this.onChange(e)}
              value={(this.state.quantity)}/>
          </form>
        </div>
      )
    } else {
      return(
        <div className="item">
          <span>{name}</span>
          <span className="quant">Quantity: {quantity}</span>
          <span className="value">Value: {value}</span>
        </div>
      )
    }
  }
}

export default InventoryItem
