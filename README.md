# Navidrome

## Build container image

```sh
make docker-dev-build
```

The image is tagged as `navidrome:dev`.

## Run

```sh
make docker-dev-run
```

The container runs on port 9999. Music goes in `./music/`. Config and SQLite DB live in `./data/`.

## Stop

```sh
make docker-dev-stop
```
