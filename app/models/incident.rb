class Incident < ApplicationRecord
  validates :name, :location, presence: true, uniqueness: true
  validates :description, presence: true

end
