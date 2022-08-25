class FavoritesController < ApplicationController
    before_action :set_favorite, only: [:show, :update, :destroy]

    def index
        render json: Favorite.all
    end

    def show
        render json: @favorite
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def update
        @favorite.update!(favorite_params)
        render json: @favorite, status: :accepted
    end

    def destroy
        @favorite.destroy
        head :no_content
    end

    private

    def set_favorite
        @favorite = Favorite.find(params[:id])
    end

    def favorite_params
        params.permit(:id, :reason)
    end
end
