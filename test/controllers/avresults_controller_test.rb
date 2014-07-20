require 'test_helper'

class AvresultsControllerTest < ActionController::TestCase
  test "should get presults" do
    get :presults
    assert_response :success
  end

end
