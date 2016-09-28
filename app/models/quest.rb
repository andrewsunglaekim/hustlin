class Quest < ApplicationRecord
  has_many :quest_item_rules
  has_many :items, through: :quest_item_rules
  def self.get_quests_by_user user
    quests = where("req_age <= :age", {age: user.age})
    eligible_quests = []
    quests.each do |quest|
      # TODO: can only implement one requirement for quest
      rule = QuestItemRule.find_by(quest: quest, rule: QuestItemRule.rules[:requirement])
      player_item = PlayerItem.find_by(user: user, item: rule.item)
      if player_item && player_item.quantity >= rule.quantity
        eligible_quests << quest
      end
    end
    eligible_quests
  end
end
