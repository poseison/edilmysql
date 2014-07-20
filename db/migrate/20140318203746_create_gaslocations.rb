class CreateGaslocations < ActiveRecord::Migration
  def change
    create_table :gaslocations do |t|
      t.string :name
      t.string :address
      t.float :longitude
      t.float :latitude
      t.boolean :gmaps
     
      t.timestamps
    end
  end
end
