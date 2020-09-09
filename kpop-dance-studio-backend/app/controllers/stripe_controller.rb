class StripeController < ApplicationController
  
  def payment(amount=1000)
    # byebug
    intent = Stripe::PaymentIntent.create({
      amount: amount,
      currency: 'usd',
    })
    if intent.save
      render json: intent.client_secret, status: 200
    else 
      render json: {error: "Failed!"}, status: 500
    end
  end
  

end