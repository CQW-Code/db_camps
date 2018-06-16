class Api::CampsController < ApplicationController
  before_action :authenticate_user!, only: [ :update, :delete]
  before_action :set_camp, only: [:update, :delete]

  def index
    camps = Camp.all
    render json: camps
  end
  

  def show
    render json: @camp
  end

  def update
    
  end

  def delete
    
  end

  private

  def set_camp
    @pcamp = Product.find(params[:id])
  end

end
