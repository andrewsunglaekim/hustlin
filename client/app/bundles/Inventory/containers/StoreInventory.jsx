import React, {Component} from 'react'
import InventoryItem from '../components/InventoryItem'

class StoreInventory extends Component {
  constructor(props){
    console.log(props);
    super(props)
  }
  render(){
    var inventoryItems = this.props.items.map((item) => {
      return (
        <InventoryItem
          key={item.id}
          item={item}
          itemType={this.props.itemType}
          playerMoney={this.props.playerMoney}
          onTransaction={this.props.onSellItem} />
      )
    })
    return(
      <div className="store items">
        <h2>{this.props.name}</h2>
        {inventoryItems}
      </div>
    )
  }
}

export default StoreInventory
