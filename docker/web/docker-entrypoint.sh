#!/bin/bash
set -e

sudo cron

if [ $RAILS_ENV = "production" ] || [ $RAILS_ENV = "staging" ]; then
  bundle install --without development test
  bundle exec rails assets:precompile
  bundle exec rails db:migrate
else
  bundle install
fi

#bundle exec whenever --update-crontab

rm -f tmp/pids/server.pid

bundle exec rails s -p 3000 -b '0.0.0.0'

exec "$@"
