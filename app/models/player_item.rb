class PlayerItem < ApplicationRecord
  after_initialize :set_quantity_to_zero
  belongs_to :user
  belongs_to :item

  def set_quantity_to_zero
    self.quantity ||= 0
  end
end
