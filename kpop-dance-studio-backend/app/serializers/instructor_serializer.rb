class InstructorSerializer < ActiveModel::Serializer
    attributes :id, :name, :instagram, :image
    has_many :schedules
end