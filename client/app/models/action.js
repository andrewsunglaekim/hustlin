import axios from 'axios'

class Action {
  static ageUser(time){
    let request = axios({
      method: 'put',
      url: 'age_user',
      data: {time: time}
    })
    return request
  }
}

export default Action
