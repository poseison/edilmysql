class AddgaslocationtoGasmeter < ActiveRecord::Migration
  def self.up
     change_table :gasmeters do |t|
       t.references :gaslocation, :polymorphic => true
     end
   end

   def self.down
     change_table :gasmeters do |t|
       t.remove_references :gaslocation, :polymorphic => true
     end
   end
end
