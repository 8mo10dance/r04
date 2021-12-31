class SupplierBlueprint < Blueprinter::Base
  identifier :id
  fields :name

  view :with_products do
    association :products, blueprint: ProductBlueprint
  end
end
