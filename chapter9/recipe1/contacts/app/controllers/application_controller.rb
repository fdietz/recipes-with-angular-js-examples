class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :intercept_html_requests

  layout nil

  private

  def intercept_html_requests
    render('layouts/application') if request.format == Mime::HTML
  end
end
