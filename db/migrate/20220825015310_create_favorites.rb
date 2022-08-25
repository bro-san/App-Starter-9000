class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :program, null: false, foreign_key: true
      t.string :reason

      t.timestamps
    end
  end
end
