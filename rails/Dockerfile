FROM ruby:2.7.4 AS backend

ENV TZ Asia/Tokyo

ARG USERNAME=app
ARG GROUPNAME=app
ARG UID=1000
ARG GID=1000
ARG RAILS_ENV
ENV RAILS_ENV $RAILS_ENV

RUN groupadd -g $GID $GROUPNAME && \
    useradd -u $UID -g $GID $USERNAME

USER $USERNAME
WORKDIR /rails

ENV BUNDLER_VERSION 2.2.29
RUN gem install bundler -v "${BUNDLER_VERSION}"

COPY Gemfile Gemfile.lock ./
RUN if [ "${RAILS_ENV:-development}" = development ]; then \
    bundle config set --local development 'true'; \
    bundle install --jobs=4; \
    else \
    bundle config set --local without 'development test'; \
    bundle install --jobs=4; \
    fi
RUN mkdir -p tmp/pids

VOLUME ["/rails"]
