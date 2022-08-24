class ApplicationController < ActionController::API
  before_action :authenticate_user
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def current_user
    @current_user ||= User.find_by_id(session[:user_id]) #memorized, to make fewer calls to the db
  end

  private

  def authenticate_user
    render json: {errors: {User: "Not Authorized"}}, status: :unauthorized unless current_user

  end

  def render_invalid(exception)
    render json: {errors: exception.record.errors}, status: :unprocessable_entity
  end

  def render_not_found(exception)
    render json: {errors: {exception.model => "Not Found"}}, status: :render_not_found
  end

end
