class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false, default: ''
      t.references :supplier, foreign_key: true

      t.timestamps
    end
  end
end
