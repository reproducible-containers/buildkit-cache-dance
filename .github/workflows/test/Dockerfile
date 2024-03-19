FROM ubuntu:22.04
RUN rm -f /etc/apt/apt.conf.d/docker-clean && \
  echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache
RUN \
  --mount=type=cache,target=/var/cache/apt,sharing=locked \
  --mount=type=cache,id=cache-var-lib-apt,target=/var/lib/apt,sharing=locked \
  apt update && \
  apt-get --no-install-recommends install -y gcc
