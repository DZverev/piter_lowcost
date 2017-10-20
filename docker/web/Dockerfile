FROM ruby:2.4.2

RUN apt-get update -qq && apt-get install -y --no-install-recommends \
                            apt-utils build-essential \
                            libpq-dev nodejs cron sudo less \
                            chrpath libssl-dev libxft-dev \
                            libfreetype6 libfreetype6-dev \
                            libfontconfig1 libfontconfig1-dev \
                        && rm -rf /var/lib/apt/lists/*


RUN useradd -ms /bin/bash dockeruser

USER dockeruser

WORKDIR /home/dockeruser/project

RUN gem install bundler

COPY docker/web/docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]