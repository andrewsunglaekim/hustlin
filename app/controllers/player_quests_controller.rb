class PlayerQuestsController < ApplicationController
  def create
    quest = Quest.find(params['questId'])
    PlayerQuest.create!(user: current_user, quest: quest)
    current_quests = current_user.player_quests.map{|player_quest| player_quest.quest }
    data = {
      eligible_quests: current_user.get_eligible_quests,
      current_quests: current_quests
    }
    render json: data
  end
end
