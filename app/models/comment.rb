class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :program
    has_many :responses, dependent: :destroy

end