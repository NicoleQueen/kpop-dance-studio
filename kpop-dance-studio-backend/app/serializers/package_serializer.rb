class PackageSerializer < ActiveModel::Serializer
    attributes :id, :kind
    belongs_to :user
end