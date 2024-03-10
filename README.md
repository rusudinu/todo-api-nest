# Quick todo api in nest

Used for demos and workshops.

## Test if the app works well

```bash
curl http://localhost:4000/ping
```

## Build the docker image

```bash
docker build -t todo-api-nest . 
```

```bash
docker run -p4000:4000 todo-api-nest
```
