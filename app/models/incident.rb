class Incident < ApplicationRecord
  validates :name, :location, presence: true, uniqueness: true
  validates :description, presence: true

  has_many :comments,
    class_name: 'Comment',
    foreign_key: :incident_id,
    primary_key: :id

end
