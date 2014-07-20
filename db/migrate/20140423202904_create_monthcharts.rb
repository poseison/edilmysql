class CreateMonthcharts < ActiveRecord::Migration
  def change
    create_table :monthcharts do |t|

      t.timestamps
    end
  end
end
