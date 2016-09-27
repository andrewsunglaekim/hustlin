class CreateQuestItemRules < ActiveRecord::Migration[5.0]
  def change
    create_table :quest_item_rules do |t|
      t.belongs_to :quest
      t.belongs_to :item
      t.integer :rule
      t.integer :quantity
      t.timestamps
    end
  end
end
