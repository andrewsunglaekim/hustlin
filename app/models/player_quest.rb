class PlayerQuest < ApplicationRecord
  belongs_to :user
  belongs_to :quest
  before_save :update_starting_age, :spend_item

  def update_starting_age
    self.starting_age = self.user.age
  end

  def completion_age
    self.starting_age + self.quest.req_time
  end

  # TODO: as complexity grows for this application, more sub methods will have to be added
  def complete_quest
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
    quest_rewards = self.quest.quest_item_rules.reward
    quest_rewards.each do |reward|
      player_item = PlayerItem.find_or_initialize_by(user: self.user, item: reward.item)
      player_item.quantity += reward.quantity
      player_item.save
    end
  end

  def spend_item
    quest = self.quest
    cost_quest_item_rules = quest.quest_item_rules.cost
    cost_quest_item_rules.each do |rule|
      player_item = PlayerItem.find_by(user: self.user, item: rule.item)
      player_item.quantity -= rule.quantity
      player_item.save
    end
  end
end
