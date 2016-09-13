class GameController < ApplicationController
  before_action :authenticate_user!
  def homebase
    @user = current_user
    @player_items = current_user.player_items
  end
end
