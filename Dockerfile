# Start with a base image with Node.js
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy only package.json initially to avoid cache busting
COPY package.json ./

# Install pnpm using the version specified in the packageManager field of package.json and log the version
RUN set -ex; \
    PNPM_VERSION=$(grep '"packageManager":' package.json | cut -d '"' -f 4 | cut -d '@' -f 2); \
    npm install -g pnpm@$PNPM_VERSION;

# Copy other files as needed
COPY . .

# Install app dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Build the app
RUN pnpm run build

# Expose port 3000
EXPOSE 3000

CMD [ "node", "-r", "dotenv/config", "build" ]
