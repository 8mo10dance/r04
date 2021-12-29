require 'rails_helper'

RSpec.describe "Api::V1::Suppliers", type: :request do
  describe "GET /api/v1/suppliers" do
    it "returns http success" do
      get "/api/v1/suppliers"
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /api/v1/suppliers" do
    subject(:post_create) { post "/api/v1/suppliers", params: { supplier: supplier_params } }

    context '正常系' do
      let(:supplier_params) { attributes_for :supplier }

      it "returns http success" do
        post_create
        expect(response).to have_http_status(:success)
      end

      it { expect { post_create }.to change(Supplier.kept, :count).by 1 }
    end

    context 'name が空の場合' do
      let(:supplier_params) { attributes_for :supplier, name: '' }

      it "returns http failed" do
        post_create
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it { expect { post_create }.not_to change(Supplier.kept, :count) }
    end
  end

  describe "GET /api/v1/suppliers/:id" do
    let(:supplier) { create :supplier }

    before { supplier }

    it "returns http success" do
      get "/api/v1/suppliers/#{supplier.id}"
      expect(response).to have_http_status(:success)
    end
  end

  describe "PATCH /api/v1/suppliers/:id" do
    let(:patch_update) { patch "/api/v1/suppliers/#{supplier.id}", params: { supplier: supplier_params } }

    let(:supplier) { create :supplier }
    let(:supplier_params) { attributes_for :supplier }

    before { supplier }

    context '正常系' do
      it "returns http success" do
        patch_update
        expect(response).to have_http_status(:success)
      end

      it { expect { patch_update }.to change { supplier.reload.name }.to supplier_params[:name] }
    end

    context 'name が空の場合' do
      let(:supplier_params) { attributes_for :supplier, name: '' }

      it "returns http failed" do
        patch_update
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it { expect { patch_update }.not_to change { supplier.reload.name } }
    end
  end

  describe "DELETE /api/v1/suppliers/:id" do
    subject(:delete_supplier) { delete "/api/v1/suppliers/#{supplier.id}" }

    let(:supplier) { create :supplier }

    before { supplier }

    it "returns http success" do
      delete_supplier
      expect(response).to have_http_status(:success)
    end

    it { expect { delete_supplier }.to change(Supplier.kept, :count).by -1 }
  end

end
