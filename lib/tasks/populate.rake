namespace :db do
  desc "Erase and fill database"
  task :populate => :environment do
    require 'populator'
    require 'faker'
    require 'date'
    
    [Gasmeter].each(&:delete_all)
    
    i=0
    z=0
    
    Gasmeter.populate 100 do |person|
      i=i+1
      person.capturedate    = Date.today-i
      puts i
      person.vslue = Random.rand(10...1500)
      person.gaslocation_id=1
    end
    Gasmeter.populate 100 do |person|
      z=z+1
      person.capturedate    = Date.today-z
      person.vslue = Random.rand(10...1500)
      person.gaslocation_id=2
    end
  end
end