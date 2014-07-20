class PygmentsWorker
  include Sidekiq::Worker
  sidekiq_options queue: "high"
  
  
  # sidekiq_options retry: false
  
  def perform(snippet_id)
    x=Gaslocation.last_meter(2)
    puts x
    UserMailer.welcome_email(2)
    puts 'hi how are you '
  end
  def self.late_night_work
      10.times do |x|
        puts 'hi how are you ?'
      end
    end
end