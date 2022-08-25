class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :link, :category, :rating, :description, :icon, :screenshot
end
