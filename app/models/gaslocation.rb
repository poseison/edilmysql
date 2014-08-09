require 'date'
class Gaslocation < ActiveRecord::Base
  has_many:gasmeters, autosave: true
  belongs_to:user
  accepts_nested_attributes_for :gasmeters, :allow_destroy => true
   geocoded_by :address
   after_validation :geocode, :if => :address_changed?
   def self.totalconsumption(gl)
     @gaslocation=Gaslocation.find(gl)
     @lmeter=Array.new
     @lmeter=@gaslocation.gasmeters
     ln=0   
     if @lmeter.size <=0 then 
        ln=0
      else
        @lmeter.each do |x|
          ln=ln+x.vslue
        end
      end
      ln  
   end
   def self.last_meter(gl)
     @gaslocation=Gaslocation.find(gl)
     @lmeter=Array.new
     @lmeter=@gaslocation.gasmeters
     ln=0
     if @lmeter.size <=0 then 
        ln=0
      else
        @lmeter.each do |x| 
            ln=ln+x.vslue
      end
    end
      ln
   end
   def self.lastupdate(gl)
   @mygaslocation=Gaslocation.find(gl)
   @gmeters=@mygaslocation.gasmeters.order('capturedate')
   if @gmeters.size >1 
     nmeter=@gmeters.last
     ln=nmeter.capturedate
    else
      ln="Undefined"
    end
    ln
  end
  
   
   def self.dailyvalue(gl,start,last)
     @mygaslocation=Gaslocation.find(gl)
     @gmeters=Array.new
     @nmeters=Array.new
     @kmeters=Array.new
     @gmeters=@mygaslocation.gasmeters
     if @gmeters==nil then 
        return 0
      end
     @gmeters.each do |x|
       if (x.capturedate>=start) && (x.capturedate<=last) 
         @nmeters<<{capturedate: x.capturedate,capturevalue:x.vslue}
       end
     end
     puts @nmeters
     if @nmeters.length==0 
       ln="Undefined"
     else
       total=0
       @nmeters.each do |val|
        total += val[:capturevalue]
       end
       average=total
       puts 'tHE AVERAGE IS'
       puts average
     x=@nmeters[0]
     ln=average
   end
   ln
   end
     
   
   def self.chart_data(gl,start,last)
     @mygaslocation=Gaslocation.find(gl)
     @gmeters=Array.new
     @nmeters=Array.new
     @kmeters=Array.new
     @gmeters=@mygaslocation.gasmeters
     @gmeters.each do |x|
       if x.capturedate>=start 
         @nmeters<<{capturedate: x.capturedate,capturevalue:x.vslue}
       end
     end
     @nmeters
   end
   
   
  
   
   
   def self.printhello
     puts 'hello from me, Harris the best'
   end
   def self.monthly_data(gl,start,last)
     @mygaslocation=Gaslocation.find(gl)
     @gmeters=@mygaslocation.gasmeters
     @nmeters=Array.new
     date1 = Date.parse(start)
     date1.strftime('%d-%m-%Y')
     date2 = Date.parse(last) 
     date2.strftime('%d-%m-%Y')
     s1=date1.to_date.beginning_of_month
     s2=date2.to_date.beginning_of_month
     range=(s1..s2).select{|d| d.day==4}    
     range.map do |month|
       {
         value1:month.strftime("%B"),
         value2:Gasmeter.monthd(month.to_s,gl)
         
       }
     end
   end
     
     
     
     
   
     
end
