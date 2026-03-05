FROM node:18-bullseye-slim
WORKDIR /app

RUN apt-get update && \
    apt-get install -y build-essential libssl-dev ca-certificates && \
    rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# copy wait script and make it executable
COPY wait-for-db.sh /usr/local/bin/wait-for-db.sh
RUN chmod +x /usr/local/bin/wait-for-db.sh

# wait for db, then generate prisma client, push schema and start
CMD ["sh", "-c", "/usr/local/bin/wait-for-db.sh && npx prisma generate && npx prisma db push --accept-data-loss && node src/index.js"]

