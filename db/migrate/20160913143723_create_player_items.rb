class CreatePlayerItems < ActiveRecord::Migration[5.0]
  def change
    create_table :player_items do |t|
      t.integer :quantity
      t.belongs_to :user
      t.belongs_to :item
      t.timestamps
    end
  end
end
