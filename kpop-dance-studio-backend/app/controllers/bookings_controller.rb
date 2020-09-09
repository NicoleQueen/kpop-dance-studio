class BookingsController < ApplicationController
  def index 
    @bookings = Booking.all
    render json: @bookings
  end

  def create
    @booking = Booking.create(user_id: booking_params[:user_id], schedule_id: booking_params[:schedule_id])
  end

  private

  def booking_params
    params.permit(:user_id, :schedule_id)
  end
end
