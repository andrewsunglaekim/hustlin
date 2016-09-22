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

5.times do |i|
  User.create(email: "user#{i}@email.com", password: "password", age: rand(500), money: rand(1000))
end

10.times do |i|
  Item.create(name: Faker::Space.moon, value: rand(100))
end

5.times do
  User.all.each do |user|
    item = Item.all.sample
    if !(PlayerItem.find_by(item: item, user: user))
      PlayerItem.create(item: item, user:user, quantity: rand(10))
    end
  end
end

store = Store.create(name: "The Store")

Item.all.each do |item|
  StoreItem.create(item: item, store: store, quantity: rand(10))
end
