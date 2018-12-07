class AddShortNameToCamps < ActiveRecord::Migration[5.1]
  def change
    add_column :camps, :shortname, :string
  end
end
