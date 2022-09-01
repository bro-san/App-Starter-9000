class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username
  has_many :programs
  has_many :favorites
end
