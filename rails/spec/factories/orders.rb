FactoryBot.define do
  factory :order do
    association :supplier
    name { Faker::Lorem.word }
  end
end
