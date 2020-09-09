class CreatePackages < ActiveRecord::Migration[6.0]
  def change
    create_table :packages do |t|
      # t.integer :counts #how many class a user can book.
      # t.integer :months #how many month a user can book.
      t.integer :kind #there are 3 kind of package, 1 for 1 class, 3 for 3 classes, 30 for 1 month.
      t.float :price
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
