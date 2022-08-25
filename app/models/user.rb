class User < ApplicationRecord
    has_many :favorites  
    has_many :comments
    has_many :responses
    has_many :programs, through: :favorites
    validates :username, uniqueness: true

    has_secure_password
end