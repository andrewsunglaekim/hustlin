import axios from 'axios'

class Store {
  static getStore(){
    let request = axios.get("store/1")
    return request
  }
  static sellItem(storeId, data){
    let request = axios({
      method: 'put',
      url: `store/${storeId}/sell_item`,
      data: data
    })
    return request
  }
  static purchaseItem(storeId, data){
    let request = axios({
      method: 'put',
      url: `store/${storeId}/purchase_item`,
      data: data
    })
    return request
  }
}

export default Store
