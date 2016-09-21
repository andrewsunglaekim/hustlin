class GameController < ApplicationController
  before_action :authenticate_user!
  def homebase
    @user = current_user
    @hello_world_props = { name: "Stranger" }
    @player_items = current_user.player_items
  end
end
