class HomepageController < ApplicationController
  skip_before_action :authenticate_user!, :only => [:show, :about]

  def show
  end

  def new_payment
    @site_payment = SitePayment.new
  end

  def cart
    @orders = current_user.site_payments.all
  end

  def create
  end
end
