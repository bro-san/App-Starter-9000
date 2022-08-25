class Program < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :comments  
    has_many :users, through: :favorites
    # has_many :commenters, through: :comments, source: "User"
    validates :name, uniqueness: true

end