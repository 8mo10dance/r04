FactoryBot.define do
  factory :order_detail do
    association :order
    association :product

    name { Faker::Lorem.word }
    quantity { rand(1000) }
  end
end
