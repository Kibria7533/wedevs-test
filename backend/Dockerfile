# ---------- Build Stage ----------
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install all dependencies (including dev for migrations/tests)
RUN npm install

# Copy application source
COPY . .

# ---------- Production Stage ----------
FROM node:16-alpine AS production

WORKDIR /app

# Copy only package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built app and other files (like migrations, config, etc.)
COPY --from=build /app ./

# Expose app port
EXPOSE 3001

# Run the app (waits for db before starting)
CMD ["npm", "start"]
