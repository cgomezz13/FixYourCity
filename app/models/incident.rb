class Incident < ApplicationRecord
  validates :name, :lat, :lon, presence: true, uniqueness: true
  validates :description, presence: true

  has_attached_file :photo
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/

  has_many :comments,
    class_name: 'Comment',
    foreign_key: :incident_id,
    primary_key: :id

end
