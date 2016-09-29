class CreatePlayerQuests < ActiveRecord::Migration[5.0]
  def change
    create_table :player_quests do |t|
      t.belongs_to :quest
      t.belongs_to :user
      t.integer :starting_age
      t.timestamps
    end
  end
end
