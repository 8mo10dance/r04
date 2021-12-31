require 'rails_helper'

RSpec.describe "Api::V1::Suppliers", type: :request do
  describe "GET /api/v1/suppliers" do
    subject(:get_index) { get "/api/v1/suppliers" }

    before { create :supplier }

    it "returns http success" do
      get_index
      expect(response).to have_http_status(:success)
    end

    it "confirm json schema" do
      get_index
      assert_response_schema_confirm(200)
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

      it "confirm json schema" do
        post_create
        assert_response_schema_confirm(200)
      end

      it { expect { post_create }.to change(Supplier.kept, :count).by 1 }
    end

    context 'name が空の場合' do
      let(:supplier_params) { attributes_for :supplier, name: '' }

      it "returns http failed" do
        post_create
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "confirm json schema" do
        post_create
        assert_response_schema_confirm(422)
      end

      it { expect { post_create }.not_to change(Supplier.kept, :count) }
    end
  end

  describe "GET /api/v1/suppliers/:id" do
    subject(:get_show) { get "/api/v1/suppliers/#{supplier.id}" }

    let(:supplier) { create :supplier }

    before { supplier }

    it "returns http success" do
      get_show
      expect(response).to have_http_status(:success)
    end

    it "confirm json schema" do
      get_show
      assert_response_schema_confirm(200)
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

      it "confirm json schema" do
        patch_update
        assert_response_schema_confirm(200)
      end

      it { expect { patch_update }.to change { supplier.reload.name }.to supplier_params[:name] }
    end

    context 'name が空の場合' do
      let(:supplier_params) { attributes_for :supplier, name: '' }

      it "returns http failed" do
        patch_update
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it "confirm json schema" do
        patch_update
        assert_response_schema_confirm(422)
      end

      it { expect { patch_update }.not_to change { supplier.reload.name } }
    end
  end

  describe "DELETE /api/v1/suppliers/:id" do
    subject(:delete_destroy) { delete "/api/v1/suppliers/#{supplier.id}" }

    let(:supplier) { create :supplier }

    before { supplier }

    it "returns http success" do
      delete_destroy
      expect(response).to have_http_status(:success)
    end

    it { expect { delete_destroy }.to change(Supplier.kept, :count).by -1 }
  end

end
