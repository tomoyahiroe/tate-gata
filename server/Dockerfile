FROM oven/bun:latest
WORKDIR /app
# Copy the lock and package file
COPY bun.lockb . 
COPY package.json . 

# Install dependencies
RUN bun install

# Copy your source code
# If only files in the src folder changed, this is the only step that gets executed!
COPY src ./src 

CMD ["bun", "run", "dev"]