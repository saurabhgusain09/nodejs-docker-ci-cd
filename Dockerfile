# Step 1: Base Image
FROM node:18-alpine

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all source code
COPY . .

# Step 6: Expose the port
EXPOSE 3000

# Step 7: Start the app
CMD ["node", "index.js"]
 
