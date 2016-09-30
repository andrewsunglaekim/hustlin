class PlayerItem < ApplicationRecord
  after_initialize :set_quantity_to_zero
  before_save :delete_if_empty
  belongs_to :user
  belongs_to :item

  def set_quantity_to_zero
    self.quantity ||= 0
  end

  def delete_if_empty
    if self.quantity == 0
      self.reload
      self.destroy
    end
  end
end
