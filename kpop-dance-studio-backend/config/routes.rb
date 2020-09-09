Rails.application.routes.draw do
  resources :bookings
  resources :schedules
  resources :packages
  resources :instructors
  resources :users

  post "/login", to: "users#login"
  get "/persist", to: "users#persist"

   #stripe
   post 'secret', to: "stripe#payment"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
 