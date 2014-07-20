class AllmapsController < ApplicationController
  before_filter :authenticate_user!
  def index
    if user_signed_in? then 
      puts 'not signed in'
    end
    @date = params[:date] ? Date.parse(params[:date]) : Date.today
    @thisuser=current_user
    @mylocations=Gaslocation.all
    @locations = Gaslocation.all
    @thismeter=Gaslocation.last_meter(2)
    @pins=User.donutchart(1)
    @gauges=User.gaugechart(1)
    @total=0
    @mylocations.each do |x|
      @total=@total+Gaslocation.last_meter(x.id)
    end    
    @ids=[];
    @hash = Gmaps4rails.build_markers(@locations) do |location, marker|
      marker.lat location.latitude
      marker.lng location.longitude
      marker.title location.address
      @ids << location.id
    end
  end
end
 
