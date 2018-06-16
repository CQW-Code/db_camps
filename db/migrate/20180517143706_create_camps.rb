class CreateCamps < ActiveRecord::Migration[5.1]
  def change
    create_table :camps do |t|
      t.string :name
      t.string :organization
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state
      t.string :zip
      t.string :web_url
      t.date :begin_date
      t.date :end_date
      t.text :details
      t.string :contact1
      t.string :type1
      t.string :contact2
      t.string :type2
      t.string :email
      t.string :cost
      t.string :eligibility
      t.string :image

      t.timestamps
    end
  end
end
