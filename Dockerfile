FROM node:22.0.0-alpine

# Set the working directory inside the container
WORKDIR /app


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# Install dependencies
RUN npm install -g pnpm
RUN pnpm i

# Copy the rest of the app's source code to the working directory
COPY . .

# Build the Next.js app
# RUN npx zenstack generate

# RUN npx prisma generate

# RUN npm i -g pwa-asset-generator
# RUN npx pwa-asset-generator public/wgl3.jpeg public/assets/

RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
