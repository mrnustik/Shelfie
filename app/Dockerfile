# Use the official Node.js image with the same version as your development environment
FROM --platform=$BUILDPLATFORM node:20-alpine AS base

# Install dependencies required for Next.js and other build tools
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --frozen-lockfile

# Copy the rest of the application
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the application
RUN npm run build

# Production image with only necessary files
FROM --platform=$TARGETPLATFORM node:20-alpine AS runner
WORKDIR /app

# Install dependencies only needed for production
RUN apk add --no-cache libc6-compat

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Create necessary directories
RUN mkdir -p .next/static

# Copy the built application
COPY --from=base /app/next.config.js .
COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static

# Ensure the server.js file is executable
RUN chmod +x server.js

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
