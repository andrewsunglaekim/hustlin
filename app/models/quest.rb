class Quest < ApplicationRecord
  has_many :quest_item_rules
  has_many :items, through: :quest_item_rules
  def self.get_quests_by_user user
    quests = where("req_age <= :age", {age: user.age})
    eligible_quests = []
    quests.each do |quest|
      is_eligible_quest = false
      requirements = QuestItemRule.where(quest: quest, rule: QuestItemRule.rules[:requirement])
      met_requirements = requirements.select {|requirement| requirement.is_eligible_by_player user}
      if requirements.length == met_requirements.length
        eligible_quests << quest
      end
    end
    eligible_quests
  end
end
