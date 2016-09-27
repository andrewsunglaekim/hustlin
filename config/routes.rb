Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: "game#homebase"
  get '/home' => "game#homebase"
  get '/store/:id' => "game#store"
  put '/store/:id/sell_item' => "stores#sell_item"
  put '/store/:id/purchase_item' => "stores#purchase_item"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
