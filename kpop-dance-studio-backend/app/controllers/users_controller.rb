class UsersController < ApplicationController
    def index 
        @users = User.all
        render json: @users
      end

      before_action :authorized, only:[:persist]

  def show 
    @user = User.find_by_id(params[:id])
    render json: @user
  end

  def create
      @user = User.create(user_params)
      if @user.valid?
          token = encode_token({user_id: @user.id})   
          render json: @user
      else 
          render json: {error:'failed to create a user'}
      end
  end 

  def login
      @user = User.find_by(username:params[:username])
      
      if @user && @user.authenticate(params[:password])
          token = encode_token({user_id: @user.id})
          render json: {user:UserSerializer.new(@user), token:token}
      else
          render json: {error:"wrong user or password"}
      end 
      
  end 
  
  def persist
      token = encode_token({user_id: @user.id})
      render json: {user:UserSerializer.new(@user), token:token} 
  end 

  private 
  def user_params
      params.permit(:username, :password, :email)
  end 
end
