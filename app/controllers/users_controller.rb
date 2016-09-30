class UsersController < ApplicationController
  before_action :authenticate_user!
  def age_user
    current_user.increment_age(params[:time])
    current_user.reload
    # TODO: this needs to update player_items as well
    data = {
      user: current_user,
      eligible_quests: current_user.get_eligible_quests,
      current_quests: current_user.player_quests.map{|player_quest| player_quest.quest},
      stores: current_user.get_accessible_stores,
      player_items: current_user.react_player_items
    }
    render json: data
  end
end
