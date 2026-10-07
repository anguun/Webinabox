# ---- Stage 1: build the React app ----
FROM node:20-alpine AS build

# Folder inside the container where we work
WORKDIR /app

# Copy dependency files first so Docker can cache the install step
COPY package*.json ./
RUN npm install

# Copy the rest of the source code and build it into static files (dist/)
COPY . .
RUN npm run build

# ---- Stage 2: serve the built files with nginx ----
FROM nginx:alpine

# Replace the default nginx config with ours (listens on port 3000)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy only the finished build output from stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Document the port nginx listens on
EXPOSE 3000

# Start nginx in the foreground so the container stays running
CMD ["nginx", "-g", "daemon off;"]
