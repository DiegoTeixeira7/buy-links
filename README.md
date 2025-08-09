# default-next

## Project setup with docker

### Start docker container

```bash
yarn docker:up
```

### Stop docker container

```bash
yarn docker:down
```

### Restart docker container

```bash
yarn docker:restart
```

## Project setup without docker

### Install dependencies

```bash
yarn install
```

## Generate .env file and replace required values

```bash
cp .env.example .env.local
```

### Run development server

```bash
yarn dev
```

## Linting

### Run eslint

```bash
yarn lint
```

### Fix eslint issues

```bash
yarn lint:fix
```# buy-links
