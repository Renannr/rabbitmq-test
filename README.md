# RabbitMQ with Node.js and TypeScript test

This project is a test for setting up message sending and receiving using RabbitMQ with Node.js and TypeScript

## Project Structure

```
.
├── docker-compose.yml      # RabbitMQ service
├── src/
│   ├── main.ts             # Entry point
│   ├── send.ts             # Sends a message to the queue
│   └── receive.ts          # Listens and prints the message
├── tsconfig.json
├── package.json
└── .gitignore
```

## Getting Started

### 1. Start RabbitMQ with Docker

Make sure Docker is running, then run:

```bash
docker-compose up -d
```

RabbitMQ Management UI will be available at:  
[http://localhost:15672](http://localhost:15672)  
**User/Pass:** `guest` / `guest`

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

You should see the receiver listening, and then the sender sends a message which is printed to the console.

## Scripts

- `npm start` — compiles and runs the app using `ts-node-dev`
- `npm run build` — builds the app to `/dist`

## Tech Stack

- Node.js
- TypeScript
- amqplib
- RabbitMQ (via Docker)
