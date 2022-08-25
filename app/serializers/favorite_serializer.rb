class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :reason
  has_one :user
  has_one :program
end
