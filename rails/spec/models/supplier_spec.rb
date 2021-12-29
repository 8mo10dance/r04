require 'rails_helper'

RSpec.describe Supplier, type: :model do
  describe '#discard!' do
    subject(:discard!) { supplier.discard! }

    let(:supplier) { create :supplier, :with_products }

    before { supplier }

    it 'product も論理削除される' do
      expect { discard! }.to change(Product.kept, :count).by -3
    end
  end
end
