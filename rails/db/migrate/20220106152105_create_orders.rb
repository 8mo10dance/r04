class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :name, default: '', null: false
      t.references :supplier, foreign_key: true

      t.timestamps
    end
  end
end
