class QuestItemRule < ApplicationRecord
  belongs_to :quest
  belongs_to :item
  enum rule: [:reward, :cost, :requirement]
  def is_eligible_by_player user
    player_item = PlayerItem.find_by(user: user, item: self.item)
    player_item && player_item.quantity >= self.quantity ? self : false
  end
end
