class Supplier < ApplicationRecord
  include Discard::Model

  has_many :products, -> { Product.kept }, dependent: :destroy

  validates :name, presence: true, uniqueness: true
end
