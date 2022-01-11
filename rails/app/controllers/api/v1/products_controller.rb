class Api::V1::ProductsController < ApplicationController
  def index
    supplier = Supplier.kept.find(params[:supplier_id])
    products = supplier.products
    render json: { products: ProductBlueprint.render_as_json(products) }
  end

  def create
    supplier = Supplier.kept.find(params[:supplier_id])
    product = supplier.products.new(product_attributes)
    return render json: { messages: product.error.full_messages } if product.invalid?

    product.save!
    render json: { product: ProductBlueprint.render_as_json(product) }
  end

  def show
    product = Product.kept.find(params[:id])
    render json: { product: ProductBlueprint.render_as_json(product) }
  end

  def update
    product = Product.kept.find(params[:id])
    product.attributes = product_attributes
    return render json: { messages: product.error.full_messages } if product.invalid?

    product.save!
    render json: { product: ProductBlueprint.render_as_json(product) }
  end

  def destroy
    product = Product.kept.find(params[:id])
    product.discard!
    head :ok
  end

  private

  def product_attributes
    params.require(:product).permit(:name)
  end
end
