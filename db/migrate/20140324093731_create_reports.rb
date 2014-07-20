class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.string :idnumber

      t.timestamps
    end
  end
end
