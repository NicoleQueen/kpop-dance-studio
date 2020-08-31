class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :package
  belongs_to :schedule
end
