import axios from 'axios'

class Store {
  static sellItem(storeId, data){
    let request = axios({
      method: 'put',
      url: `${storeId}/sell_item`,
      data: data
    })
    return request
  }
  static purchaseItem(storeId, data){
    let request = axios({
      method: 'put',
      url: `${storeId}/purchase_item`,
      data: data
    })
    return request
  }
}

export default Store
