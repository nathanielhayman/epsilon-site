class CreateSitePayments < ActiveRecord::Migration[6.1]
  def change
    create_table :site_payments do |t|
      t.string :payment_level
      t.string :pages
      t.string :description
      t.string :contact_info
      t.boolean :tos

      t.belongs_to :user

      t.timestamps
    end
  end
end
