class CommentSerializer < ActiveModel::Serializer
  attributes :id, :letter
  has_one :user
  has_one :program
  has_many :responses
end
