# The BuildKit Cache Dance
Save `RUN --mount=type=cache` caches on GitHub Actions or other CI platforms

The BuildKit Cache Dance allows saving [`RUN --mount=type=cache`](https://docs.docker.com/build/guide/mounts/#add-a-cache-mount)
caches on GitHub Actions or other CI platforms by extracting the cache from the previous build and injecting it into the current build.

Use cases:
- apt-get (`/var/cache/apt`, `/var/lib/apt`)
- Go (`/root/.cache/go-build`)
- etc.

This [`reproducible-containers/buildkit-cache-dance`](https://github.com/reproducible-containers/buildkit-cache-dance) action was forked from
[`overmindtech/buildkit-cache-dance`](https://github.com/overmindtech/buildkit-cache-dance/tree/306d31a77191f643c0c4a95083f36c6ddccb4a16)
(archived on September 2023).
This action be used for "non-reproducible" containers too.

## Examples

### apt-get GitHub Actions

Dockerfile:

```dockerfile
FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN \
  --mount=type=cache,target=/var/cache/apt,sharing=locked \
  --mount=type=cache,target=/var/lib/apt,sharing=locked \
  rm -f /etc/apt/apt.conf.d/docker-clean && \
  echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' >/etc/apt/apt.conf.d/keep-cache && \
  apt-get update && \
  apt-get install -y gcc
```

Action:

```yaml
---
name: Build
on:
  push:

jobs:
  Build:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
        id: setup-buildx
      - uses: docker/metadata-action@v5
        id: meta
        with:
          images: Build

      - name: Cache
        uses: actions/cache@v4
        id: cache
        with:
          path: cache-mount
          key: cache-mount-${{ hashFiles('Dockerfile') }}

      - name: Restore Docker cache mounts
        uses: reproducible-containers/buildkit-cache-dance@v3
        with:
          builder: ${{ steps.setup-buildx.outputs.name }}
          cache-dir: cache-mount
          dockerfile: Dockerfile
          skip-extraction: ${{ steps.cache.outputs.cache-hit }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          cache-from: type=gha
          cache-to: type=gha,mode=max
          file: Dockerfile
          push: ${{ github.event_name != 'pull_request' }}
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}

```

Real-world examples:
- <https://github.com/rootless-containers/slirp4netns/blob/v1.2.2/.github/workflows/release.yaml#L18-L36>
- <https://github.com/containers/fuse-overlayfs/blob/40e0f3c/.github/workflows/release.yaml#L17-L36>

## CacheMap Options

If you require more fine grained control you can manually specify a JSON formatted `cache-map`. The keys specify the paths on the Docker builder host to use as the bind source and the string value provides the cache mount `target` within the Docker build:

```yaml
      - name: Restore Docker cache mounts
        uses: reproducible-containers/buildkit-cache-dance@v3
        with:
          builder: ${{ steps.setup-buildx.outputs.name }}
          cache-map: |
            {
              "var-cache-apt": "/var/cache/apt",
              "var-lib-apt": "/var/lib/apt"
            }
          skip-extraction: ${{ steps.cache.outputs.cache-hit }}
```

Alternatively, you can provide a JSON object with additional options that should be passed to `--mount=type=cache` in the values `cache-map` JSON. The `target` path must be present in the object as a property.

```yaml
      - name: Restore Docker cache mounts
        uses: reproducible-containers/buildkit-cache-dance@v3
        with:
          builder: ${{ steps.setup-buildx.outputs.name }}
          cache-map: |
            {
              "var-cache-apt": {
                "target": "/var/cache/apt",
                "id": "1"
              },
              "var-lib-apt": "/var/lib/apt"
            }
          skip-extraction: ${{ steps.cache.outputs.cache-hit }}
```

## CLI Usage

In other CI systems, you can run the script directly via `node`:

```shell
curl -LJO https://github.com/reproducible-containers/buildkit-cache-dance/archive/refs/tags/v3.1.0.tar.gz
tar xvf buildkit-cache-dance-3.1.0.tar.gz
```
During injection:

```shell
node  ./buildkit-cache-dance-3.1.0/dist/index.js --cache-map '{"var-cache-apt": "/var/cache/apt", "var-lib-apt": "/var/lib/apt"}'
```

After build during extraction:

```shell
node  ./buildkit-cache-dance-3.1.0/dist/index.js --extract --cache-map '{"var-cache-apt": "/var/cache/apt", "var-lib-apt": "/var/lib/apt"}'
```

Here are the available options:

```
build-cache-dance [options]
Save 'RUN --mount=type=cache' caches on GitHub Actions or other CI platforms

Options:
  --extract      Extract the cache from the docker container (extract step). Otherwise, inject the cache (main step)
  --cache-map    The map of actions source to container destination paths for the cache paths
  --dockerfile   The Dockerfile to use for the auto-discovery of cache-map. Default: 'Dockerfile'
  --cache-dir    The root directory where cache content is injected from/extracted to when using auto-discovery of the cache-map.
  --scratch-dir  Where the action is stores some temporary files for its processing. Default: 'scratch'
  --skip-extraction  Skip the extraction of the cache from the docker container
  --builder     The name of the buildx builder. Default: 'default'
  --help         Show this help
```

## Releases
### v1
v1 follows the original design of [`overmindtech/buildkit-cache-dance`](https://github.com/overmindtech/buildkit-cache-dance/tree/306d31a77191f643c0c4a95083f36c6ddccb4a16).

v1 is composed of two actions:
- `reproducible-containers/buildkit-cache-dance/inject@v1.0.1`
- `reproducible-containers/buildkit-cache-dance/extract@v1.0.1`

See the [`releases/v1`](https://github.com/reproducible-containers/buildkit-cache-dance/tree/releases/v1) branch.

### v2
v2 is composed of the single `reproducible-containers/buildkit-cache-dance` action.

### v3

Rewrote the action in TypeScript and adds support for `cache-map` that gets a string of files that need to be injected as a JSON string. This makes it possible to inject multiple directories in one call and simplifies the usage.

This release also makes it possible to run the script outside GitHub Actions in other CI platforms or locally using command line arguments.

## Acknowledgement
- Thanks to [Alexander Pravdin](https://github.com/speller) for the basic idea in [this comment](https://github.com/moby/buildkit/issues/1512).
- Thanks to the authors of the original [`overmindtech/buildkit-cache-dance`](https://github.com/overmindtech/buildkit-cache-dance).
