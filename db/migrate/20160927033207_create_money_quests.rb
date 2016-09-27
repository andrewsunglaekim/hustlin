class CreateMoneyQuests < ActiveRecord::Migration[5.0]
  def change
    create_table :money_quests do |t|
      t.integer :reward
      t.integer :karma
      t.integer :req_time
      t.string :description
      t.string :title
      t.timestamps
    end
  end
end
