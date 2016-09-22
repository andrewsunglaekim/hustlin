class GameController < ApplicationController
  before_action :authenticate_user!
  def homebase
    @user = current_user
    @player_items = current_user.player_items.map do |player_item|
      {
        id: player_item.id,
        name: player_item.item.name,
        quantity: player_item.quantity,
        value: player_item.item.value
      }
    end
    @homebase_props = {
      user: @user,
      player_items: @player_items
    }
  end
end
