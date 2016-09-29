class PlayerQuest < ApplicationRecord
  belongs_to :user
  belongs_to :quest
  before_save :update_starting_age

  def update_starting_age
    self.starting_age = self.user.age
  end

  def completion_age
    self.starting_age + self.quest.req_time
  end

  # TODO: as complexity grows for this application, more sub methods will have to be added
  def complete_quest
    # complete quest
      # gain any monetary reward
      reward_money
      # gain any item rewards
      reward_items
      # delete player_quest
      self.destroy
  end

  private
  def reward_money
    user.money += self.quest.reward
  end

  def reward_items
    # self.quest
  end
end
