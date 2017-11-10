module Api
  module V1
    class DataController < BaseController
      def index
        render json: data
      end

      private

      def data
        data = []
        20.times do
          data << { id: Faker::Number.unique.number(3),
                    to: Faker::Address.city,
                    from: Faker::Address.unique.city,
                    date: Faker::Date.between(Time.zone.today, 1.year.from_now),
                    price: Faker::Number.decimal(2) }
        end
        Faker::UniqueGenerator.clear
        data
      end
    end
  end
end
