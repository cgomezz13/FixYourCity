class Api::IncidentController < ApplicationController

  def create
    @incident = Incident.new(incident_params)
    if @incident.save

    else
      error = @incident.errors.full_messages
      render json: error, status: 401
    end
  end

  def update
    @incident = Incident.find(params[:id])
    if @incident.update(incident_params)

    else
      error = @incident.errors.full_messages
      render json: error, status: 401
    end
  end

  private
  def incident_params
    params.require(:incident).permit(:name, :location, :description)
  end

end
