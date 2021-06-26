Rails.application.routes.draw do
  devise_for :users
  root to: "homepage#show"
  get '/', to: "homepage#show", as: :site_payments
  get '/about', to: "homepage#about", as: :about
  get '/cart', to: "homepage#cart", as: :cart
  get '/site-order', to: "homepage#new_payment", as: :new_site_payment
  get '/site-order?plan=:plan', to: "homepage#new_payment"
  post '/site-order', to: "homepage#create", as: :create_site_payment
end
