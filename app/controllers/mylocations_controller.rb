class MylocationsController < ApplicationController
  def show
    @mylocations=Gaslocation.all
    @mymarks=[]
    @mylocations.each do |x|
      @mymarks << {longitude:x.longitude, latitude:x.latitude, id:x.id, address:x.address}
    end
    puts @mymarks
    gon.mymarkers=@mymarks
    puts 'the gon is'
    puts gon.mymarkers
  end
end
