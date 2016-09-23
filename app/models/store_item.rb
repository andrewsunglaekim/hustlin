class StoreItem < ApplicationRecord
  after_initialize :set_quantity_to_zero
  belongs_to :store
  belongs_to :item

  def set_quantity_to_zero
    self.quantity ||= 0
  end
end
