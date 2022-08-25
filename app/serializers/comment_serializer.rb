class CommentSerializer < ActiveModel::Serializer
  attributes :id, :letter
  has_one :user
  has_many :responses
end
