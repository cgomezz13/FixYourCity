class User < ApplicationRecord

  validates :username, :home_zipcode, :description, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  def self.find_by_credentials (username, password)
    user = User.find_by(username: username)
    if user &&
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end


end
