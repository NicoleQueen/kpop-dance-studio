class CreateInstructors < ActiveRecord::Migration[6.0]
  def change
    create_table :instructors do |t|
      t.string :name
      t.string :image
      t.string :info
      t.string :instagram

      t.timestamps
    end
  end
end
