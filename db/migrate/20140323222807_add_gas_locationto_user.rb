class AddGasLocationtoUser < ActiveRecord::Migration
  def self.up
     change_table :gaslocations do |t|
       t.references :user, :polymorphic => true
     end
   end

   def self.down
     change_table :gaslocations do |t|
       t.remove_references :user, :polymorphic => true
     end
   end
end
