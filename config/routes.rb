Rails.application.routes.draw do
  root 'home#index'

	namespace :api do 
		get "neighborhoods", to: "zillow#neighborhoods"
		get 'maps_key', to: 'move#maps_key'
    get 'walkscore_map', to: 'move#walkscore_map'
    get 'user_profile', to: 'profiles#show'
    get "walkscore", to: "walkscore#score"
    get "new_walkscore", to: "walkscore#new_score"
		resources :profiles
  	resources :move
    get 'city_schrate', to: 'move#city_schrate'
    get 'city_crimerate', to: 'move#city_crimerate'
    get 'compare_cities', to: 'move#compare_cities'
    get 'compare_salary', to: 'move#compare_salary'
	end  

  devise_for :users, controllers: { sessions: 'sessions', 
                                    registrations: 'registrations',
                                    passwords: 'passwords' }
  post 'facebook_login', to: 'third_party_auth#facebook'

  # keep this at the very bottom
  get '*unmatched_route', to: 'home#index'
end
