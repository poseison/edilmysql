# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(email:"chlaliotis@gmail.com",password:"xlal1779")
street_list = ["ΜΕΝΑΝΔΡΟΥ 1 14561", "ΠΑΤΗΣΙΩΝ 31","ΠΑΤΡΙΑΡΧΟΥ ΙΩΑΚΕΙΜ 32"]
street_list.each do |name|
  Gaslocation.create( address: name )
end
   