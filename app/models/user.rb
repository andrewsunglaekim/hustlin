class User < ApplicationRecord
  include UserConcern
  has_many :player_quests
  has_many :quests, through: :player_quests
  has_many :player_items, dependent: :destroy
  has_many :items, through: :player_items
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  def get_accessible_stores
    Store.where("min_age <= :age", {age: self.age})
  end
  def get_eligible_quests
    Quest.get_quests_by_user(self)
  end
  def increment_age time
    self.age += time
    self.save
  end
end
