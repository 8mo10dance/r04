require 'rails_helper'

RSpec.describe Order, type: :model do
  let(:order) { build :order, supplier: supplier }
  let(:supplier) { create :supplier }

  describe 'save!' do
    subject(:save!) { order.save! }

    it 'orders.name に suppliers.name が登録される' do
      save!

      expect(order.reload.name).to eq supplier.name
    end
  end
end
