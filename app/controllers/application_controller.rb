class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_filter  :verify_authenticity_token
  # TODO: make a private method that increments age(through arg) when implementing aging feature
  private
  def increment_age time
    current_user.age += time
  end
end
