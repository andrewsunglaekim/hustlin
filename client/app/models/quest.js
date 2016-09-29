import axios from 'axios'

class Quest {
  static startQuest(questId){
    let request = axios({
      method: 'post',
      url: 'player_quest',
      data: {questId: questId}
    })
    return request
  }
}

export default Quest
