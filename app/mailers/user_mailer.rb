class UserMailer < ActionMailer::Base
  default from: "from@example.com"
  def welcome_email(user)
    mail(to: 'gloukos@yahoo.com',
             body: 'Last Metering: 38',
             content_type: "text/html",
             subject: "Excessive metering!")
    end
end
