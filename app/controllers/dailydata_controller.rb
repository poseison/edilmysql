class DailydataController < ApplicationController
  respond_to :json
  def pay
    @mylocations=Gaslocation.all
    @nmeters=Array.new
    @mydata=params[:ltable]
    puts @mydata
    @mylocations.each do |x|
      @nmeters<<{streetname:x. address, id:x.id, value1:Gaslocation.dailyvalue(x.id,@mydata,@mydata), value2:0}
    end
    puts @nmeters
    render :json => @nmeters
  end
end
