class ProgramsController < ApplicationController
    skip_before_action :authenticate_user

    def index
        render json: Program.all
    end

    def show
        program = Program.find(params[:id])
        render json: program, serializer: ProgramWithCommentsSerializer    
    end

    def create
        program = Program.create!(program_params)
        render json: program, status: :created
    end

    private

    def program_params
        params.permit(:id, :name, :link, :category, :rating, :description, :icon, :screenshot_one, :screenshot_two, :screenshot_three, :screenshot_four, :screenshot_five, :screenshot_six, :screenshot_seven, :screenshot_eight, :screenshot_nine, :screenshot_ten)
    end
end
