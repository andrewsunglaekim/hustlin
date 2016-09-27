class CreateQuests < ActiveRecord::Migration[5.0]
  def change
    create_table :quests do |t|
      t.integer :reward
      t.integer :cost
      t.integer :karma
      t.integer :req_karma
      t.integer :req_age
      t.integer :req_time
      t.string :description
      t.string :title
      t.timestamps
    end
  end
end
