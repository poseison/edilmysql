class AvresultsController < ApplicationController
  respond_to :json
  def presults
    @date1=params[:ltable]
    @ltd=params[:lid]
    @choice=params[:lchoice]
    puts @choice
    case @choice
    when 0 
     @pins= {reading:Gaslocation.dailyvalue(@ltd,@date1,@date1), readingdate:@date1+"-23:50", currentdate:0, msg1:"Day -D1", msg2:"Day -D2",msg0:"CurrentDay"}
    when 1
     @pins= {reading:Gaslocation.dailyvalue(@ltd,@date1,@date1), readingdate:@date1+"-23:50", currentdate:0, msg1:"Month -M1", msg2:"Month -M2",msg0:"CurrentMonth"}
    when 2 
      @pins= {reading:Gaslocation.dailyvalue(@ltd,@date1,@date1), readingdate:@date1+"-23:50", currentdate:0, msg1:"Year -M1", msg2:"Year -Y2",msg0:"CurrentYear"}
    else              
      @pins= {reading:"-", readingdate:"-", currentdate:0, msg1:"-", msg2:"-",msg0:"-"}
    end
    render :json => @pins
  end
end
