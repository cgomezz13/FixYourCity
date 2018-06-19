class Comment < ApplicationRecord
  validates :body, :title, presence: true

  belongs to :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id

  belongs to :incident,
    class_name: 'Incident',
    foreign_key: :incident_id,
    primary_key: :id
end
