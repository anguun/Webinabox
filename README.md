# Webinabox

A lightweight web application built with React and Vite, containerized with Docker.

## Getting Started

### Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Docker

Build the image:
```bash
docker build -t webinabox .
```

Run the container:
```bash
docker run -p 8080:80 webinabox
```

Visit `http://localhost:8080` in your browser.

## Project Structure

- `src/` - React source files
- `Dockerfile` - Multi-stage build for production
- `nginx.conf` - Nginx configuration for serving the app
- `vite.config.js` - Vite bundler configuration
