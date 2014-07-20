require 'test_helper'

class LchartControllerTest < ActionController::TestCase
  test "should get plot" do
    get :plot
    assert_response :success
  end

end
