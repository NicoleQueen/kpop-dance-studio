class PackagesController < ApplicationController
    def index 
        @packages = Package.all
        render json: @packages
    end

    def create
      @package = Package.create(kind: package_params[:kind], price: package_params[:price], user_id: package_params[:user_id])
    end
  
    private
  
    def package_params
      params.permit(:kind, :price, :user_id)
    end
end
