class Instructor < ApplicationRecord
    has_many :schedules, dependent: :destroy

    
end
