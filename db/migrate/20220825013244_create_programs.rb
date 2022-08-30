class CreatePrograms < ActiveRecord::Migration[6.1]
  def change
    create_table :programs do |t|
      t.string :name
      t.string :link
      t.string :category
      t.string :rating
      t.string :description
      t.string :icon
      t.string :screenshot1
      t.string :screenshot2
      t.string :screenshot3
      t.string :screenshot4
      t.string :screenshot5
      t.string :screenshot6
      t.string :screenshot7
      t.string :screenshot8
      t.string :screenshot9
      t.string :screenshot10

      t.timestamps
    end
  end
end
