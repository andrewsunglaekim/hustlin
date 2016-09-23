Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: "welcome#home"
  get '/home' => "game#homebase"
  get '/store' => "game#store"
  get '/store/:id' => "stores#show"
  put '/store/:id/sell_item' => "stores#sell_item"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
