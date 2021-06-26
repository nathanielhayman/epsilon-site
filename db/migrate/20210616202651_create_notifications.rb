class CreateNotifications < ActiveRecord::Migration[6.1]
  def change
    create_table :notifications do |t|
      t.string :title
      t.string :description
      t.string :url

      t.belongs_to :user

      t.timestamps
    end
  end
end
