require 'date'
class GaslocationsController < ApplicationController
  def show
     @thislocation = Gaslocation.all 
     @mylocation=Gaslocation.find(params[:id])
     gon.locid=@mylocation.id
     @search=@thislocation.search(params[:q])
     @smeters=@search.result
     @xsl=params[:id]
     puts @xsl
  end 
  def set_search
     @thislocation = Gaslocation.all 
     @search=@thislocation.search(params[:q])
     @smeters=@search.result
  end
  def preview
    
  end
  def searchview
    @mylocation=Gaslocation.find(params[:id])
    @thisid=params[:id]
    @mymeters=@mylocation.gasmeters
    @myuser=params[:username]
    @dmeters=Array.new
    s1=params[:user]["first_date(1i)"].to_i
    s2=params[:user]["first_date(2i)"].to_i
    s3=params[:user]["first_date(3i)"].to_i
    b1=params[:user]["last_date(1i)"].to_i
    b2=params[:user]["last_date(2i)"].to_i
    b3=params[:user]["last_date(3i)"].to_i
    @firstdate=Date.new(s1,s2,s3)
    @lastdate=Date.new(b1,b2,b3)
    @mymeters.each do |thismeter|
      if thismeter.capturedate>@firstdate && thismeter.capturedate<@lastdate
        @dmeters<<thismeter
      end
    end
    @yup= Gaslocation.chart_data(2,@firstdate,@lastdate)
    @firstmeter=@dmeters[0]
    #firstdate=params[:user][:name]
    respond_to do |format|
    format.js  
    end
  end
       
end
