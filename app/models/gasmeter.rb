require 'date'
class Gasmeter < ActiveRecord::Base
  scope :bymonth,  ->(d1,gl) { where("capturedate >= ? AND capturedate <= ? AND gaslocation_id = ?" , Date.parse(d1),Date.parse(d1)+1,gl) }
  scope :byid,  ->(id) { where("gaslocation_id = ?" ,id) }
    belongs_to:gaslocation
   def to_s
     "#{capturedate} "
   end
   def self.monthd(sl,gl)
     @s1=self.bymonth(sl,gl)
     p1=@s1.first
     if(p1) 
       p1.vslue
     else
     48
   end
   end
   
 end
 
