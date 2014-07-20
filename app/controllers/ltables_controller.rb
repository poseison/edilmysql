class LtablesController < ApplicationController
  
  def create
    @date1=params[:ltable]
    @date2=params[:ldtable]
    @ltd=params[:lid]
    puts @ltd
    puts @date1
    puts @date2
    @pins= Gaslocation.chart_data(@ltd,@date1,@date2)
    puts @pins
    respond_to do |format|
      format.json { render :json => @pins }
    end
  end
  def index
    
  end
end
