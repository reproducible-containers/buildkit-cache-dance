# The BuildKit Cache Dance: save `RUN --mount=type=cache` caches on GitHub Actions

The BuildKit Cache Dance allows saving [`RUN --mount=type=cache`](https://docs.docker.com/build/guide/mounts/#add-a-cache-mount)
caches on GitHub Actions.

Use cases:
- apt-get (`/var/cache/apt`, `/var/lib/apt`)
- Go (`/root/.cache/go-build`)
- etc.

This [`reproducible-containers/buildkit-cache-dance`](https://github.com/reproducible-containers/buildkit-cache-dance) action was forked from
[`overmindtech/buildkit-cache-dance`](https://github.com/overmindtech/buildkit-cache-dance/tree/306d31a77191f643c0c4a95083f36c6ddccb4a16)
(archived on September 2023).
This action be used for "non-reproducible" containers too.

## Examples
### apt-get
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
on: push

jobs:
  build:
    name: Build
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
      - uses: docker/metadata-action@v5
        id: meta
        with:
          images: YOUR_IMAGE
      - name: Cache var-cache-apt
        uses: actions/cache@v3
        with:
          path: var-cache-apt
          key: var-cache-apt-${{ hashFiles('Dockerfile') }}
      - name: Cache var-lib-apt
        uses: actions/cache@v3
        with:
          path: var-lib-apt
          key: var-lib-apt-${{ hashFiles('Dockerfile') }}
      - name: inject var-cache-apt into docker
        uses: reproducible-containers/buildkit-cache-dance@v2.1.3
        with:
          cache-source: var-cache-apt
          cache-target: /var/cache/apt
      - name: inject var-lib-apt into docker
        uses: reproducible-containers/buildkit-cache-dance@v2.1.3
        with:
          cache-source: var-lib-apt
          cache-target: /var/lib/apt
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

## Releases
### v1
v1 follows the original design of [`overmindtech/buildkit-cache-dance`](https://github.com/overmindtech/buildkit-cache-dance/tree/306d31a77191f643c0c4a95083f36c6ddccb4a16).

v1 is composed of two actions:
- `reproducible-containers/buildkit-cache-dance/inject@v1.0.1`
- `reproducible-containers/buildkit-cache-dance/extract@v1.0.1`

See the [`releases/v1`](https://github.com/reproducible-containers/buildkit-cache-dance/tree/releases/v1) branch.

### v2
v2 is composed of the single `reproducible-containers/buildkit-cache-dance` action.

## Acknowledgement
- Thanks to [Alexander Pravdin](https://github.com/speller) for the basic idea in [this comment](https://github.com/moby/buildkit/issues/1512).
- Thanks to the authors of the original [`overmindtech/buildkit-cache-dance`](https://github.com/overmindtech/buildkit-cache-dance).
