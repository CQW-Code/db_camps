class Api::CampsController < ApplicationController
  # before_action :authenticate_user!, only: [ :update, :delete]
  before_action :set_camp, only: [:show, :update, :destroy]

  def index
    camps = Camp.all
    render json: camps
  end
  

  def show
    render json: @camp
  end

  def create
    camp = Camp.create(camp_params)
    if camp.save
      render json: camp
    else
      render json: { errors: camp.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @camp.update(camp_params)
      render json: @camp
    else
      render json: { errors: @camp.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @camp.destroy
  end

  private

  def set_camp
    @camp = Camp.find(params[:id])
  end
  def camp_params
    params.require(:camp).permit(:name, :shortname, :organization, :address1, 
      :address2, :city, :state, :zip, :web_url, :begin_date, :end_date, :details, :contact1, 
      :type1, :contact2, :type2, :email, :cost, :eligibility, :image)
  end


end
