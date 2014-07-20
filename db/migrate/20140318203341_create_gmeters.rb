class CreateGmeters < ActiveRecord::Migration
  def change
    create_table :gmeters do |t|
      t.float :value

      t.timestamps
    end
  end
end
