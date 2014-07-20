module Api
  module V1
    class MonthchartsController < ApplicationController
      respond_to :json
      def index
        @c1=Gaslocation.monthly_data(2,'2014-01-01','2014-10-3')
        respond_with @c1
      end
      def show
      end
      def create
        @c1=Gaslocation.monthly_data(2,'2014-01-01','2014-10-3')
        render json: @c1
      end
      def update
      end
      def update
      end
  
    end
  end
end

    
