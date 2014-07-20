class CreateLtables < ActiveRecord::Migration
  def change
    create_table :ltables do |t|
      t.date :fdate
      t.date :ldate

      t.timestamps
    end
  end
end
