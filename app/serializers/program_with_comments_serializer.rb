class ProgramWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :category, :rating, :description, :icon, :screenshot_one, :screenshot_two, :screenshot_three, :screenshot_four, :screenshot_five, :screenshot_six, :screenshot_seven, :screenshot_eight, :screenshot_nine, :screenshot_ten
  has_many :comments
  has_many :favorites
end
