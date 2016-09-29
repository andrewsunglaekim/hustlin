module UserConcern
  extend ActiveSupport::Concern
  included do
    after_save :check_quests
  end

  def check_quests
    self.player_quests.each do |player_quest|
      if self.age >= player_quest.completion_age
        # complete quest
      end

    end
  end
end
