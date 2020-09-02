class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :time, :video_url, :date
  belongs_to :instructor
 
end