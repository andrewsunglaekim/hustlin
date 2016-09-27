class Item < ApplicationRecord
  has_many :player_items
  has_many :store_items
  has_many :quest_item_rules
  has_many :players, through: :player_items
  has_many :stores, through: :store_items
  has_many :quests, through: :quest_item_rules
end
