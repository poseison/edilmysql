require 'sidekiq/web'
Mygasmeter::Application.routes.draw do
  get "avresults/presults"
  get "mylocations/show"
  get "monthdata/pay"
  get "alarminfo/show"
  mount Sidekiq::Web, at: '/sidekiq'
  get 'announcements/:id/hide' => 'announcements#hide', as: 'hide_announcement'
  post 'dailydata' => 'dailydata#pay', as: 'pay_dailydata'
  post 'monthdata' => 'monthdata#pay', as: 'pay_monthdata'
  post 'avresults' => 'avresults#presults', as: 'presults_avresults'
  namespace :api do
      namespace :v1 do
        resources :monthcharts
      end
    end
  resources :monthcharts

  get "ltables/create"
  get "ltables/show"
  resources :ltables

  post "lchart/plot"
  resources :gaslocations do
    member do
        get 'preview'
        post 'searchview'
      end
  end
  resources :marklocations
  get "reports/index"
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get "allmaps/index"
  devise_for :users
  get '/about'    => 'high_voltage/pages#show', id: 'about'
    get '/contact'  => 'high_voltage/pages#show', id: 'contact'
    get '/privacy'  => 'high_voltage/pages#show', id: 'privacy'
    get '/terms'    => 'high_voltage/pages#show', id: 'terms'

    get '/home', to: redirect('/')

    root :to => 'high_voltage/pages#show', id: 'home'
  
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end
  
  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
