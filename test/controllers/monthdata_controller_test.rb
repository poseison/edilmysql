require 'test_helper'

class MonthdataControllerTest < ActionController::TestCase
  test "should get pay" do
    get :pay
    assert_response :success
  end

end
