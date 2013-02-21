Contacts::Application.routes.draw do

  root :to => "contacts#index"

  scope "api" do
    resources :contacts
  end

  match "*path" => "contacts#index"
end
