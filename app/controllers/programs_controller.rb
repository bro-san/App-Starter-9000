class ProgramsController < ApplicationController

    def index
        render json: Program.all
    end

    def show
        program = Program.find(params[:id])
        render json: program    
    end

    def create
        program = Program.create!(program_params)
        render json: program, status: :created
    end

    private

    def program_params
        params.permit(:id, :name, :link, :category, :rating, :description, :icon, :screenshot)
    end
end
