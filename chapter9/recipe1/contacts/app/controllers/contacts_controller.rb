class ContactsController < ApplicationController
  respond_to :json

  def index
    @contacts = Contact.all
    respond_with @contacts
  end

  def show
    @contact = Contact.find(params[:id])
    respond_with @contact
  end

  def create
    @contact = Contact.new(params[:contact])
    if @contact.save
      render json: @contact, status: :created, location: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def update
    @contact = Contact.find(params[:id])
    if @contact.update_attributes(params[:contact])
      head :no_content
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    head :no_content
  end
end
