require "sinatra"
require 'sinatra/base'
require "sinatra"
require 'pony'

set :bind, '0.0.0.0'


get "/" do
  erb :index
end

post "/email" do
  unless params[:name] == "" || params[:email] == "" || params[:message] == ""
    Pony.mail(
      :to => 'chadd980@gmail.com',
      :from => "#{params[:email]}",
      :subject => "New message through your portfolio from #{params[:email]}",
      :body => "#{params[:name]} says: #{params[:message]}. respond using #{params[:email]}",
      :via => :smtp,
      :via_options => {
        :address => 'smtp.gmail.com',
        :port => '587',
        :enable_starttls_auto => true,
        :user_name => "chaddd980@gmail.com",
        :password => "bakura15",
        :authentication => :plain,
      }
    )
  end
  redirect "/"
end
