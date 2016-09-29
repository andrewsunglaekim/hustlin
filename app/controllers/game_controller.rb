class GameController < ApplicationController
  before_action :authenticate_user!
  def homebase
    @user = current_user
    @eligible_quests = current_user.get_eligible_quests
    @current_quests = current_user.player_quests
    @stores = current_user.get_accessible_stores
    @player_items = get_player_items
    @homebase_props = {
      user: @user,
      eligible_quests: @eligible_quests,
      current_quests: @current_quests,
      player_items: @player_items
    }
  end

  def store
    @player_items = get_player_items
    # TODO: obviously can't do Store.first, make multiple stores going forward, open up as you progress in the game
    @store = Store.find(params[:id])
    @store_items = @store.store_items.map do |store_item|
      {
        id: store_item.id,
        name: store_item.item.name,
        quantity: store_item.quantity,
        value: store_item.item.value
      }
    end
    @store_props = {
      id: @store.id,
      name: @store.name,
      user: current_user,
      player_items: @player_items,
      store_items: @store_items
    }
  end
  private
  def get_player_items
    current_user.player_items.map do |player_item|
      {
        id: player_item.id,
        name: player_item.item.name,
        quantity: player_item.quantity,
        value: player_item.item.value
      }
    end
  end
end
