class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.string :start_time
      t.string :end_time
      t.string :date
      t.belongs_to :instructor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
