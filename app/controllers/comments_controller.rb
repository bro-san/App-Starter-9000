class CommentsController < ApplicationController
    skip_before_action :authenticate_user
    
    before_action :set_comment, only: [:show, :update, :destroy]

    def index
        render json: Comment.all
    end

    def show
        render json: @comment
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        @comment.update!(comment_params)
        render json: @comment, status: :accepted
    end

    def destroy
        @comment.destroy
        head :no_content
    end

    private

    def set_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:id, :letter, :user_id, :program_id)
    end
end
