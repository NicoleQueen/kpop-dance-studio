class BookingSerializer < ActiveModel::Serializer
  attributes :id, :schedule
  belongs_to :user
  # belongs_to :schedule
  def schedule
    ActiveModel::SerializableResource.new(object.schedule, serializer: ScheduleSerializer)
  end
end