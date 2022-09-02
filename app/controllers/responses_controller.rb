class ResponsesController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :show]

    before_action :set_response, only: [:show, :update, :destroy]

    def index
        render json: Response.all
    end

    def show
        render json: @response
    end

    def create
        response = Response.create!(response_params)
        render json: response, status: :created
    end

    def update
        @response.update!(response_params)
        render json: @response, status: :accepted
    end

    def destroy
        @response.destroy
        head :no_content
    end

    private

    def set_response
        @response = Response.find(params[:id])
    end

    def response_params
        params.permit(:id, :note, :user_id, :comment_id)
    end
end
