class Order < ApplicationRecord
  belongs_to :supplier

  validates :name, presence: true

  before_validation :set_name

  private

  def set_name
    return if supplier.blank?

    self.name = supplier.name
  end
end
