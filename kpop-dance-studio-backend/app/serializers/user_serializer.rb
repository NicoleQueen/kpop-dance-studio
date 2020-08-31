  
class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :image
    has_many :bookings
    has_many :packages
    has_many :schedules
  end