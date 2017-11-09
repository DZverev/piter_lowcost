FROM ruby:2.4.2

RUN apt-get update -qq && apt-get install -y build-essential apt-transport-https apt-utils cron sudo libpq-dev

# for nokogiri
RUN apt-get install -y libxml2-dev libxslt1-dev

# for a JS runtime
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# for yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y yarn

RUN rm -rf /project
RUN mkdir -p /project
COPY . /project
WORKDIR /project
RUN bundle install
RUN yarn install