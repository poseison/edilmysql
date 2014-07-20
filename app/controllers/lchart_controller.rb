class LchartController < ApplicationController
  layout 'inventory'
  def plot
    s1=params[:user]["first_date(1i)"].to_i
    s2=params[:user]["first_date(2i)"].to_i
    s3=params[:user]["first_date(3i)"].to_i
    b1=params[:user]["last_date(1i)"].to_i
    b2=params[:user]["last_date(2i)"].to_i
    b3=params[:user]["last_date(3i)"].to_i
    @firstdate=Date.new(s1,s2,s3)
    @lastdate=Date.new(b1,b2,b3)
    @pins= Gaslocation.chart_data(2,@firstdate,@lastdate)
    respond_to do |format|
      format.html
    end
  end
end
