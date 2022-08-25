class UsersController < ApplicationController

     # skip_before_action :authenticate_realtor
    # # Above line needs to be in every controller 
    # that we want to run that does not require authentication 
    # skip_before_action :authenticate_user

    def index 
        render json: User.all, status: :ok
    end
    
    def show
        
       user = User.find(params[:id])
       render json: user, status: :ok
    end

    def create
        
        user = User.create(user_params)
        if user.valid?
            # session[:realtor_id] = realtor.id
            render json: user, status: :ok
       else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
       end
    end

    private

    def user_params
        params.permit(:id, :name, :username, :email, :password, :admin)
    end
end
