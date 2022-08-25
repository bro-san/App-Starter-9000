class User < ApplicationRecord
    has_many :favorites, dependent: :destroy  
    has_many :comments
    has_many :responses
    has_many :programs, through: :favorites
    validates :username, uniqueness: true

    has_secure_password

    # password=
    # password_confirmation=
    # authenticate
end