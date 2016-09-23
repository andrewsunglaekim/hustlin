import React, {Component} from 'react'
import StoreModel from '../../../models/store'
import UserInventory from '../../Inventory/containers/UserInventory'
import StoreInventory from '../../Inventory/containers/StoreInventory'

class Store extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  sellItem(itemId, quantity){
    console.log(itemId);
    console.log(quantity);
    console.log("selling item");
  }
  render() {
    return (
      <div>
        <div className="userInventory">
          <h2>My Inventory</h2>
          <h3>My Money: {this.props.user.money}</h3>
          <UserInventory items={this.props.player_items}/>
        </div>
        <div className="store">
          <h2>{this.props.name}</h2>
          <StoreInventory
            playerMoney={this.props.user.money}
            items={this.props.store_items}
            itemType={"store"}
            onSellItem={this.sellItem.bind(this)}/>
        </div>
      </div>
    )
  }
}


export default Store
