class CreateStoreItems < ActiveRecord::Migration[5.0]
  def change
    create_table :store_items do |t|
      t.belongs_to :store
      t.belongs_to :item
      t.integer :quantity
      t.timestamps
    end
  end
end
