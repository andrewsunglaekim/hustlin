class PlayerQuestsController < ApplicationController
  def create
    quest = Quest.find(params['questId'])
    PlayerQuest.create!(user: current_user, quest: quest)
    render json: "awesome!"
  end
end
