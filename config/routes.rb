NewReader::Application.routes.draw do
  resources :users
  resource :session
  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index]
  end

  root to: "sessions#new"
end
