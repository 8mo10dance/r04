class Product < ApplicationRecord
  include Discard::Model

  belongs_to :supplier

  validates :name, presence: true, uniqueness: { scope: :supplier }
end
