class StoresController < ApplicationController
  before_action :authenticate_user!
  def show
    render json: Store.first
  end

  def sell_item
    increment_age 1
    @store = Store.find(params[:id])
    @store_item = StoreItem.find(params["storeItemId"])
    @item = @store_item.item
    quantity = params["quantity"]
    @store_item.quantity -= quantity
    @store_item.save
    money_spent = quantity * @store_item.item.value
    current_user.money -= money_spent
    current_user.save
    @player_item = PlayerItem.find_or_create_by(user: current_user, item: @item)
    @player_item.quantity += quantity
    @player_item.save
    data = {
      money: current_user.money,
      storeItemQuantity: @store_item.quantity,
      playerItem: {
        id: @player_item.id,
        name: @player_item.item.name,
        quantity: @player_item.quantity,
        value: @player_item.item.value
      }
    }
    render json: data
  end

  def purchase_item
    increment_age 1
    @store = Store.find(params[:id])
    @player_item = PlayerItem.find(params["playerItemId"])
    @item = @player_item.item
    quantity = params["quantity"]
    @player_item.quantity -= quantity
    @player_item.save
    money_gained = quantity * @item.value
    current_user.money += money_gained
    current_user.save
    @store_item = StoreItem.find_or_create_by(store: @store, item: @item)
    @store_item.quantity += quantity
    @store_item.save
    data = {
      money: current_user.money,
      playerItemQuantity: @player_item.quantity,
      storeItem: {
        id: @store_item.id,
        name: @store_item.item.name,
        quantity: @store_item.quantity,
        value: @store_item.item.value
      }
    }
    render json: data
  end
end
