import React, {Component} from 'react'
import InventoryItem from '../components/InventoryItem'

class UserInventory extends Component {
  constructor(props){
    console.log(props);
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
    return (
      <div>
        {inventoryItems}
      </div>
    )
  }
}

export default UserInventory
