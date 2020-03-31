# tilelive-otp-stops

Forked from the dockerized hsl-map-server, but everything but tilelive-otp-stops removed. This is because it couldn´t run without Docker because of Node version mismatch.

Start development server:

```
docker build -t hsl-map-server .
docker run --rm -p 8080:8080 -h hsl-map-server --name hsl-map-server hsl-map-server
```
