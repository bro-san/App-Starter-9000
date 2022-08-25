class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :note
  has_one :user
end
