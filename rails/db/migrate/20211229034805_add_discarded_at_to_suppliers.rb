class AddDiscardedAtToSuppliers < ActiveRecord::Migration[7.0]
  def change
    add_column :suppliers, :discarded_at, :datetime
    add_index :suppliers, :discarded_at
  end
end
