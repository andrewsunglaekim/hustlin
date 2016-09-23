class StoresController < ApplicationController
  before_action :authenticate_user!
  def show
    render json: Store.first
  end

  def sell_item
    @store = Store.find(params[:id])
    @store_item = StoreItem.find(params["storeItemId"])
    quantity = params["quantity"]
    @store_item.quantity = @store_item.quantity - quantity
    @store_item.save
    money_spent = quantity * @store_item.item.value
    current_user.money = current_user.money - money_spent
    current_user.save
    data = {
      money: current_user.money,
      quantity: @store_item.quantity
    }
    render json: data
  end
end
