class SupplierBlueprint < Blueprinter::Base
  fields :name

  view :with_products do
    association :products, blueprint: ProductBlueprint
  end
end
