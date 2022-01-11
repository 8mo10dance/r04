require 'rails_helper'

RSpec.describe "Api::V1::Products", type: :request do
  describe "GET /api/v1/suppliers/:supplier_id/products" do
    subject(:get_index) { get "/api/v1/suppliers/#{supplier.id}/products" }

    let(:supplier) { create :supplier, :with_products }

    before { supplier }

    it "returns http success" do
      get_index
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /api/v1/suppliers/:supplier_id/products" do
    subject(:post_create) do
      post "/api/v1/suppliers/#{supplier.id}/products", params: { product: product_params }
    end

    let(:supplier) { create :supplier }
    let(:product_params) { attributes_for :product }

    it "returns http success" do
      post_create
      expect(response).to have_http_status(:success)
    end

    it { expect { post_create }.to change(Product, :count).by 1 }
  end

  describe "GET /api/v1/products/:id" do
    subject(:get_show) { get "/api/v1/products/#{product.id}" }

    let(:product) { create :product }

    before { product }

    it "returns http success" do
      get_show
      expect(response).to have_http_status(:success)
    end
  end

  describe "PATCH /api/v1/products/:id" do
    subject(:patch_update) do
      get "/api/v1/products/#{product.id}", params: { product: product_params }
    end

    let(:product) { create :product }
    let(:product_params) { attributes_for :product }

    before { product }

    it "returns http success" do
      patch_update
      expect(response).to have_http_status(:success)
    end

    it '名前が変更されること' do
      patch_update
      expect(product.reload.name).to eq product_params[:name]
    end
  end

  describe "DELETE /api/v1/products/:id" do
    subject(:delete_destroy) { delete "/api/v1/products/#{product.id}" }

    let(:product) { create :product }

    before { product }

    it "returns http success" do
      delete_destroy
      expect(response).to have_http_status(:success)
    end

    it { expect { delete_destroy }.to change(Product.kept, :count).by -1 }
  end

end
