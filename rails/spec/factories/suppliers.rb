FactoryBot.define do
  factory :supplier do
    name { Faker::Lorem.word }

    trait :with_products do
      transient do
        product_count { 3 }
      end

      after :create do |supplier, e|
        supplier.products = create_list(:product, e.product_count, supplier: supplier)
      end
    end
  end
end
