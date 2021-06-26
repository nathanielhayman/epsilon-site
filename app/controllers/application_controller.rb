class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    before_action :authenticate_user!
    before_action :load_notifications

    def load_notifications
        if !current_user.nil?
          @notifications = current_user.notifications.all.order(created_at: :desc).limit(5)
          #current_user.notifications << Notification.new(title: "Another test notification",description:"this is simply testing the notification system.", url: "#")
          #current_user.site_payments << SitePayment.new(payment_level: "1", pages: "Page1, Page2, Page3", description: "Some long description", contact_info: "someone@gmail.com", tos: true)
        end
    end
end
