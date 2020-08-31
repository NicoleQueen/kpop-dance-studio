class User < ApplicationRecord
    has_many :bookings
    has_many :packages
    has_many :schedules, through: :bookings
    has_secure_password


end
