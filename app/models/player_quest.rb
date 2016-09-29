class PlayerQuest < ApplicationRecord
  belongs_to :player
  belongs_to :quest
  before_save :update_starting_age

  def update_starting_age

  end
end
