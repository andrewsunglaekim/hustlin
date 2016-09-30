class Store < ApplicationRecord
  has_many :store_items, dependent: :destroy
  has_many :items, through: :store_items
  def react_store_items
    self.store_items.map do |store_item|
      {
        id: store_item.id,
        name: store_item.item.name,
        quantity: store_item.quantity,
        value: store_item.item.value
      }
    end
  end
end
