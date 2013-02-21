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

    respond_to do |format|
      if @contact.save
        format.json { render json: @contact, status: :created, location: @contact }
      else
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @contact = Contact.find(params[:id])

    respond_to do |format|
      if @contact.update_attributes(params[:contact])
        format.json { head :no_content }
      else
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy

    respond_to do |format|
      format.json { head :no_content }
    end
  end
end
