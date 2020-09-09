class Package < ApplicationRecord
  belongs_to :user, dependent: :destroy
 
end
