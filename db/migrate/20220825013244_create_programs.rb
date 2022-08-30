class CreatePrograms < ActiveRecord::Migration[6.1]
  def change
    create_table :programs do |t|
      t.string :name
      t.string :link
      t.string :category
      t.string :rating
      t.string :description
      t.string :icon
      t.string :screenshot_one
      t.string :screenshot_two
      t.string :screenshot_three
      t.string :screenshot_four
      t.string :screenshot_five
      t.string :screenshot_six
      t.string :screenshot_seven
      t.string :screenshot_eight
      t.string :screenshot_nine
      t.string :screenshot_ten

      t.timestamps
    end
  end
end
