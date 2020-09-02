class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.string :time
      t.string :video_url
      t.date :date
      t.belongs_to :instructor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
