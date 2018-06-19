class Comment < ApplicationRecord
  validates :body, :title, presence: true

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :incident,
    class_name: 'Incident',
    foreign_key: :incident_id,
    primary_key: :id
end
