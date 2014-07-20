class CreateGasmeters < ActiveRecord::Migration
  def change
    create_table :gasmeters do |t|
      t.datetime :capturedate
      t.float :vslue
     
      t.timestamps
    end
  end
end
