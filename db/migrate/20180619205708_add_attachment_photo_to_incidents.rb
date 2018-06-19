class AddAttachmentPhotoToIncidents < ActiveRecord::Migration[5.1]
  def self.up
    change_table :incidents do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :incidents, :photo
  end
end
