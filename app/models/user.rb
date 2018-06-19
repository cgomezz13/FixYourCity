class User < ApplicationRecord

  validates :username, :home_zipcode, :description, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials (username, password)
    user = User.find_by(username: username)
    return user if (user != nil) && user.is_password?(password)
    return nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    Bcrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
