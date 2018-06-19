@incidents.each do |incident|
    json.partial! "api/incidents/incident", incident: incident
end
