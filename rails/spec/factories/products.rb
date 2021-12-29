FactoryBot.define do
  factory :product do
    association :supplier
    name { Faker::Lorem.word }
  end
end
