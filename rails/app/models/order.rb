class Order < ApplicationRecord
  belongs_to :supplier

  validates :name, presence: true
end
