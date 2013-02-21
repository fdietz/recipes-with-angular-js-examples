Contacts::Application.routes.draw do

  root :to => "layouts#index"

  scope "api" do
    resources :contacts
  end

  match "*path" => "layouts#index"
end
