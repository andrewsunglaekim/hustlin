import React, {Component} from 'react'

class InventoryItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: ""
    }
  }
  onChange(event){
    console.log(event.target.value);
    this.setState({
      quantity: parseInt(event.target.value)
    })
  }
  onSubmit(event){
    event.preventDefault()
    if (this.isInvalidQuantity() || this.isNotEnoughMoney()){
      alert("Not enough of that item, or not enough money")
    }
    else {
      let itemId = this.props.item.id
      let quantity = this.state.quantity
      // this.props.onTransaction(itemId, quantity)
      console.log("form submitted");
    }
  }
  isInvalidQuantity(){
    return this.state.quantity > this.props.item.quantity
  }
  isNotEnoughMoney(){
    let money = this.props.playerMoney
    let moneyOwed = this.state.quantity * this.props.item.value
    console.log(money);
    console.log(moneyOwed);
    let NotEnoughMoney = money < moneyOwed
    return NotEnoughMoney
  }
  render(){
    let {name, quantity, value} = this.props.item
    if(this.props.itemType === "store"){
      return (
        <div className="item sellable">
          <span>{name}</span><span>Quantity: {quantity}</span>
          <form onSubmit={e => this.onSubmit(e)} >
            <input
              type="text"
              onChange={e => this.onChange(e)} />
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
