class Store < ApplicationRecord
  has_many :store_items, dependent: :destroy
  has_many :items, through: :store_items
end
