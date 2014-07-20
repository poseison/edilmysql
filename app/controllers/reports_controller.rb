class ReportsController < ApplicationController
  before_filter :authenticate_user!
  def index
    @thisuser=current_user
    @mylocations=@thisuser.gaslocations
  end
end
