class MarklocationsController < ApplicationController
  layout "inventory"
  def show
    @gaslocation=Gaslocation.find(params[:id])
  end
end
