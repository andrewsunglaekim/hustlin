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

  def store
    @user = current_user
    @player_items = current_user.player_items.map do |player_item|
      {
        id: player_item.id,
        name: player_item.item.name,
        quantity: player_item.quantity,
        value: player_item.item.value
      }
    end
    # TODO: obviously can't do Store.first, make multiple stores going forward, open up as you progress in the game
    @store = Store.first
    @store_items = @store.store_items.map do |store|

    end
  end
end
