class GameController < ApplicationController
  before_action :authenticate_user!
  def homebase
    @user = current_user
  end
end
