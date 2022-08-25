class CreatePrograms < ActiveRecord::Migration[6.1]
  def change
    create_table :programs do |t|
      t.string :name
      t.string :link
      t.string :category
      t.string :rating
      t.string :description
      t.string :icon
      t.string :screenshot

      t.timestamps
    end
  end
end
