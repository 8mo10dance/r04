class OrderDetail < ApplicationRecord
  belongs_to :order
  belongs_to :product

  validates :name, presence: true
end
