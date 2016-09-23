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
          playerMoney={this.props.playerMoney} />
      )
    })
    return(
      <div className="store items">
        {inventoryItems}
      </div>
    )
  }
}

export default StoreInventory
