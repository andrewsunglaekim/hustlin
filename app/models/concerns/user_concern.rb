module UserConcern
  extend ActiveSupport::Concern
  included do
    after_save :check_quests
  end

  def check_quests
    puts "something happened"
    puts self.age
  end
end
