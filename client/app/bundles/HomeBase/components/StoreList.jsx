import React, {Component} from 'react'
import Store from './Store'

class StoreList extends Component {
  constructor(props){
    super(props)
  }
  render(){
    var stores = this.props.stores.map((store) => {
      return (
        <Store
          key={store.id}
          store={store}/>
      )
    })
    return(
      <div className="storesList">
        <h2> Stores In Your Area </h2>
        {stores}
      </div>
    )
  }
}

export default StoreList
