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
        params.permit(:id, :name, :link, :category, :rating, :description, :icon, :screenshot1, :screenshot2, :screenshot3, :screenshot4, :screenshot5, :screenshot6, :screenshot7, :screenshot8, :screenshot9, :screenshot10)
    end
end
