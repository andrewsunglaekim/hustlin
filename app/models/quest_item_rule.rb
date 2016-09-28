class QuestItemRule < ApplicationRecord
  belongs_to :quest
  belongs_to :item
  enum rule: [:reward, :cost, :requirement]
end
