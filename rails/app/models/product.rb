class Product < ApplicationRecord
  belongs_to :supplier

  validates :name, presence: true, uniqueness: { scope: :supplier }
end
