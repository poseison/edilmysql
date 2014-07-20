class MonthdataController < ApplicationController
  respond_to :json
  def pay
    @mylocations=Gaslocation.all
    @nmeters=Array.new
    @mylocations.each do |x|
      @nmeters<<{streetname:x. address, id:x.id,value1:0, value2:0}
    end
    puts @nmeters
    render :json => @nmeters
  end
end
