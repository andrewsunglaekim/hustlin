class StoresController < ApplicationController
  before_action :authenticate_user!
  def show
    render json: Store.first
  end

  def sell_item
    @store = Store.find(params[:id])
    store_item_id = params["storeItemId"]
    @store_item = StoreItem.find(store_item_id)
    quantity = params["quantity"]
    new_quantity =
  end
end
