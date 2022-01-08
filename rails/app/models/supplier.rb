class Supplier < ApplicationRecord
  include Discard::Model

  has_many :products, -> { Product.kept }, dependent: :destroy
  has_many :orders, dependent: :destroy

  validates :name, presence: true, uniqueness: true

  after_discard :discard_products

  private

  def discard_products
    products.each(&:discard)
  end
end
