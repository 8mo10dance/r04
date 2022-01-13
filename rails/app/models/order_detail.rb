class OrderDetail < ApplicationRecord
  belongs_to :order
  belongs_to :product

  validates :name, presence: true
  validates :quantity,
            presence: true,
            numericality: { greater_than: 0, less_than: 1000 }

  before_validation :set_name, on: :create

  private

  def set_name
    return if product.blank?

    self.name = product.name
  end
end
