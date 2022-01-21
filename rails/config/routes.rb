Rails.application.routes.draw do
  root "home#show"

  namespace :api do
    namespace :v1 do
      resources :suppliers, only: %i[index create show update destroy], shallow: true do
        resources :products, only: %i[index create show update destroy]
      end
    end
  end
end
