class User < ActiveRecord::Base
  has_many:gaslocations
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  accepts_nested_attributes_for :gaslocations, allow_destroy: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
         def to_s
           "#{email} "
           end
           def self.donutchart(sl)
             @myuser=User.find(sl)
             @gaslocations=@myuser.gaslocations
             @nvalues=Array.new
             @gaslocations.each do |x|
               @nvalues<<{label:x.address, value:Gaslocation.last_meter(x.id)}
             end
             puts @nvaslues
             @nvalues
           end
           def self.gaugechart(sl)
             @myuser=User.find(sl)
             @gaslocations=Gaslocation.all
             @nvalues=Array.new
             @gaslocations.each do |x|
               c=Array.new
               c<<x.address
               c<<Gaslocation.last_meter(x.id)
               @nvalues<<c
             end
             @nvalues.insert(0,["Address","Last Meter"])
             puts @nvaslues
             @nvalues
           end
           private
            def user_params
                  # It's mandatory to specify the nested attributes that should be whitelisted.
                  # If you use `permit` with just the key that points to the nested attributes hash,
                  # it will return an empty hash.
                  params.require(:user).permit(:email, gaslocations_attributes: [ :address ])
                end
end
