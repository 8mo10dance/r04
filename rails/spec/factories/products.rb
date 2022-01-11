FactoryBot.define do
  factory :product do
    association :supplier
    name { Faker::Lorem.unique.word }
  end
end
