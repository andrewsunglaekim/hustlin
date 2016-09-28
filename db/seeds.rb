# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Item.destroy_all
Store.destroy_all

# TODO: these stores will eventually move to migrations as they become finalized for production
# First Store Items
pencil = Item.create(name: "pencil", value: 2, karma: 0)
lemon = Item.create(name: "lemon", value: 4, karma: 0)
pog = Item.create(name: "pog", value: 2, karma: 0)
pog_slammer = Item.create(name: "pog slammer", value: 5, karma: 0)
candy_cigarette = Item.create(name: "candy cigarette", value: 5, karma: -1)
bubble_gum = Item.create(name: "bubble gum", value: 3, karma: 0)
hot_wheels = Item.create(name: "hot wheels", value: 8, karma: 0)
teddy_bear = Item.create(name: "teddy bear", value: 15, karma: 1)


child_store_items = [pencil, lemon, pog, pog_slammer, bubble_gum, hot_wheels, teddy_bear]
child_store = Store.create(name: "KB Toystore", karma: nil, min_age: 0)
child_store_items.each do |item|
  StoreItem.create(store: child_store, item: item, quantity: 30)
end

5.times do |i|
  User.create(email: "user#{i}@email.com", password: "password", age: rand(100), money: rand(500), karma: rand(10))
end

older_user = User.create(email: "old_user@email.com", password: "password", age: 300, money: rand(500), karma: rand(10))
teenager_store = Store.create(name: "The Mall", karma: nil, min_age: 200)

school_quest = Quest.create(reward: 50, cost: 0, karma: 0, req_karma: 0, req_age: 0, req_time: 5, description: "learn all the things", title: "go to school")
school_quest_req = QuestItemRule.create(item: pencil, quantity: 3, quest: school_quest, rule: QuestItemRule.rules[:requirement])
lemonade_stand_quest = Quest.create(reward: 50, cost: 0, req_age: 0, req_time: 5, description: "Your mommy helps you out and you put up a legit lemonde stand!", title: "lemonade stand")
lemonade_stand_quest_req = QuestItemRule.create(item: lemon, quest: lemonade_stand_quest, quantity: 5, rule: QuestItemRule.rules[:requirement])
lemonade_stand_quest_cost = QuestItemRule.create(item: lemon, quest: lemonade_stand_quest, quantity: 5, rule: QuestItemRule.rules[:cost])
