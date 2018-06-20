class ChangeIncidentTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :incidents, :location
    add_column :incidents, :lat, :float
    add_column :incidents, :lon, :float
  end
end
