class UserWithFavoritesSerializerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username
  has_many :programs
end
