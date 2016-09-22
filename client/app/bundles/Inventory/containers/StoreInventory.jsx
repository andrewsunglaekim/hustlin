import React, {Component} from 'react'
import InventoryItem from '../components/InventoryItem'

class StoreInventory extends Component {
  constructor(props){
    super(props)
  }
  render(){
    var inventoryItems = this.props.items.map(function(item){
      return (
        <InventoryItem
          key={item.id}
          item={item} />
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
