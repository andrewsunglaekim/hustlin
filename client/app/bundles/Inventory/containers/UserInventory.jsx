import React, {Component} from 'react'
import InventoryItem from '../components/InventoryItem'

class UserInventory extends Component {
  constructor(props){
    super(props)
  }
  render(){
    var inventoryItems = this.props.items.map(function(item){
      return (
        <InventoryItem
          key={item.id}
          item={item}
          itemType={this.props.itemType}
          onTransaction={this.props.onPurchaseItem}/>
      )
    }.bind(this))
    return (
      <div className="player items">
        <h3 className="myMoney">My Money: {this.props.money}</h3>
        <div className="items">
          {inventoryItems}
        </div>
      </div>
    )
  }
}

export default UserInventory
