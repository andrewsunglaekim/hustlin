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
        <div className="item store">
          <span>{name}</span><span>Quantity: {quantity}</span>
          <form onSubmit={e => this.onSubmit(e)} >
            <input
              type="text"
              onChange={e => this.onChange(e)}
              value={(this.state.quantity)}/>
          </form>
        </div>
      )
    } else if (this.props.itemType === "userInStore") {
      return (
        <div>
          <span>{name}</span><span>Quantity: {quantity}</span>
          <form onSubmit={e => this.onSubmit(e)} >
            <input
              type="text"
              onChange={e => this.onChange(e)}
              value={(this.state.quantity)}/>
          </form>
        </div>
      )
    } else {
      return(
        <div className="item">
          <span>{name}</span><span>Quantity: {quantity}</span>
        </div>
      )
    }
  }
}

export default InventoryItem
