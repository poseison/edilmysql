class Gmeter < ActiveRecord::Base
  after_save :do_foobar
end
