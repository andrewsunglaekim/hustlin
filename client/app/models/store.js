import axios from 'axios'

class Store {
  static getStore(){
    let request = axios.get("store/1")
    return request
  }
}

export default Store
