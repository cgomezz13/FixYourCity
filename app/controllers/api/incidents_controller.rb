class Api::IncidentsController < ApplicationController

  def create
    @incident = Incident.new(incident_params)
    if @incident.save
      render 'api/incidents/show'
    else
      error = @incident.errors.full_messages
      render json: error, status: 401
    end
  end

  def index
    @incidents = Incident.where(location: incident_params[:location])
    render 'api/incidents/index'
  end

  def update
    @incident = Incident.find(params[:id])
    if @incident.update(incident_params)
      render 'api/incidents/show'
    else
      error = @incident.errors.full_messages
      render json: error, status: 401
    end
  end

  def show
    @incident = Incident.find(params[:id])
    render 'api/incidents/show'
  end

  private
  def incident_params
    params.require(:incident).permit(:name, :location, :description, :photo)
  end

end
