import React, {Component} from 'react'
import UserInventory from '../../Inventory/containers/UserInventory'
import StoreInventory from '../../Inventory/containers/StoreInventory'

class Store extends Component{
  constructor(props){
    console.log(props);
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="userInventory">
          <h2>My Inventory</h2>
          <UserInventory items={this.props.player_items}/>
        </div>
        <div className="store">
          <h1>{this.props.name}</h1>
          <StoreInventory items={this.props.store_items} />
        </div>
      </div>
    )
  }
}


export default Store
