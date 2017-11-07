#!/bin/bash
set -e

if [ $RAILS_ENV = "production" ] || [ $RAILS_ENV = "staging" ]; then
  bundle install --without development test
  bundle exec rails assets:precompile
else
  bundle install
fi

bundle exec bin/webpack-dev-server

exec "$@"
