require 'rails_helper'

RSpec.describe OrderDetail, type: :model do
  let(:order_detail) { build :order_detail, order: order, product: product }
  let(:order) { create :order, supplier: product.supplier }
  let(:product) { create :product }

  describe '#valid?' do
    subject(:valid?) { order_detail.valid? }

    it 'order_details.name に product.name が登録される' do
      valid?
      expect(order_details.name).to eq product.name
    end
  end
end
