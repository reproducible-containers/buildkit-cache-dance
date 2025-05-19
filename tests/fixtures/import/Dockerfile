FROM busybox:latest
RUN \
  --mount=type=cache,target=./tests/fixture/cache,sharing=locked \
  echo "Hello, world!" > /tests/fixture/cache/hello.txt

