class Api::V1::SuppliersController < ApplicationController
  def index
    @suppliers = Supplier.kept
    render json: { suppliers: SupplierBlueprint.render(@suppliers) }
  end

  def create
    @supplier = Supplier.new(supplier_attributes)
    return render json: { messages: @supplier.errors.full_messages }, status: :unprocessable_entity if @supplier.invalid?

    @supplier.save!
    render json: { supplier: SupplierBlueprint.render(@supplier) }
  end

  def show
    @supplier = Supplier.kept.find(params[:id])
    render json: { supplier: SupplierBlueprint.render(@supplier) }
  end

  def update
    @supplier = Supplier.kept.find(params[:id])
    @supplier.attributes = supplier_attributes
    return render json: { messages: @supplier.errors.full_messages }, status: :unprocessable_entity if @supplier.invalid?

    @supplier.save!
    render json: { supplier: SupplierBlueprint.render(@supplier) }
  end

  def destroy
    @supplier = Supplier.kept.find(params[:id])
    @supplier.discard!

    head :ok
  end

  private

  def supplier_attributes
    params.require(:supplier).permit(:name)
  end
end
