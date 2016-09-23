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
      let playerItems = this.state.playerItems
      let playerItem = playerItems.find(function(playerItem){ return playerItem.id === res.data.playerItem.id})
      if (playerItem) {
        playerItem.quantity = res.data.playerItem.quantity
      } else {
        playerItems.push(res.data.playerItem)
      }
      let storeItems = this.state.storeItems
      let storeItem = storeItems.find(function(storeItem){ return storeItem.id === storeItemId})
      storeItem.quantity = res.data.storeItemQuantity
      this.setState({
        userMoney: res.data.money,
        storeItems: storeItems,
        playerItems: playerItems
      })
    }.bind(this))
  }
  purchaseItem(playerItemId, quantity){
    let data = {playerItemId, quantity}
    let storeId = this.props.id
    StoreModel.purchaseItem(storeId, data).then(function(res){
      let storeItems = this.state.storeItems
      let storeItem = storeItems.find(function(storeItem){ return storeItem.id === res.data.storeItem.id})
      if (storeItem) {
        storeItem.quantity = res.data.storeItem.quantity
      } else {
        storeItems.push(res.data.storeItem)
      }
      console.log(res);
      let playerItems = this.state.playerItems
      let playerItem = playerItems.find(function(playerItem){ return playerItem.id === playerItemId})
      playerItem.quantity = res.data.playerItemQuantity
      this.setState({
        userMoney: res.data.money,
        storeItems: storeItems,
        playerItems: playerItems
      })
    }.bind(this))
  }
  render() {
    return (
      <div>
        <div className="userInventory">
          <UserInventory
            money={this.state.userMoney}
            items={this.state.playerItems}
            itemType={"userInStore"}
            onPurchaseItem={this.purchaseItem.bind(this)}/>
        </div>
        <div className="store">
          <StoreInventory
            name={this.props.name}
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
