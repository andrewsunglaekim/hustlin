module UserConcern
  extend ActiveSupport::Concern
  included do
    before_save :check_quests
  end

  def check_quests
    self.player_quests.each do |player_quest|
      if self.age >= player_quest.completion_age
        player_quest.complete_quest
      end

    end
  end
end
