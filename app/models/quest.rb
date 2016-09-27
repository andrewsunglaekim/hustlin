class Quest < ApplicationRecord
  has_many :quest_item_rules
  has_many :items, through: :quest_item_rules
end
