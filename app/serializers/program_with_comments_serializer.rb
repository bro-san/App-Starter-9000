class ProgramWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :category, :rating, :description, :icon, :screenshot
  has_many :comments
  has_many :favorites
end
