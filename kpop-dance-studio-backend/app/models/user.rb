class User < ApplicationRecord
    has_many :bookings, dependent: :destroy
    has_many :packages, dependent: :destroy
    has_many :schedules, through: :bookings, dependent: :destroy
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true

    validates_presence_of :password_digest

    validates_length_of :password, minimum: 3, if: Proc.new { |user| user.password.present? }

    validate :email_include

    def email_include
        if !email.include? "@" 
            errors.add(:email, ":must be a valid email include @")
        end
    end
end
