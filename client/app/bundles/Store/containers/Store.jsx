import React, {Component} from 'react'
import StoreModel from '../../../models/store'
import UserInventory from '../../Inventory/containers/UserInventory'
import StoreInventory from '../../Inventory/containers/StoreInventory'

class Store extends Component{
  constructor(props){
    super(props)
    this.state = {
      userMoney: props.user.money,
      playerItems: props.player_items,
      name: props.name ,
      storeItems: props.store_items
    }
  }
  sellItem(storeItemId, quantity){
    let data = {storeItemId, quantity}
    let storeId = this.props.id
    StoreModel.sellItem(storeId, data).then(function(res){
      console.log(res);
      let storeItems = this.state.storeItems
      let storeItem = storeItems.find(function(storeItem){ return storeItem.id === storeItemId})
      storeItem.quantity = res.data.quantity
      this.setState({
        userMoney: res.data.money,
        storeItems: storeItems
      })
    }.bind(this))
    console.log(storeItemId);
    console.log(quantity);
    console.log("selling item");
  }
  render() {
    return (
      <div>
        <div className="userInventory">
          <h2>My Inventory</h2>
          <h3>My Money: {this.state.userMoney}</h3>
          <UserInventory items={this.state.playerItems}/>
        </div>
        <div className="store">
          <h2>{this.props.name}</h2>
          <StoreInventory
            playerMoney={this.state.userMoney}
            items={this.state.storeItems}
            itemType={"store"}
            onSellItem={this.sellItem.bind(this)}/>
        </div>
      </div>
    )
  }
}


export default Store
