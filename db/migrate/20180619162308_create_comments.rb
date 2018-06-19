class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :body
      t.string :title
      t.integer :user_id
      t.integer :incident_id

      t.timestamps
    end
  end
end
