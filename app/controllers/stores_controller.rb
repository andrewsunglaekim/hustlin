class StoresController < ApplicationController
  before_action :authenticate_user!
  def show
    render json: Store.first
  end
end
