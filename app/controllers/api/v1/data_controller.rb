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
            to: Faker::Space.moon,
            from: Faker::Space.galaxy,
            date: Faker::Date.between(Date.today, 1.year.from_now),
            price: Faker::Number.decimal(2)
          }
        end
        data
      end
    end
  end
end
