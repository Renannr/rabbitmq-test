import amqp, { ConsumeMessage } from 'amqplib'

export async function receiveMessage(): Promise<void> {
  const conn = await amqp.connect('amqp://localhost')
  const channel = await conn.createChannel()
  const queue = 'hello'

  await channel.assertQueue(queue, { durable: false })
  console.log(`waiting for messages in queue: ${queue}`)

  channel.consume(queue, (msg: ConsumeMessage | null) => {
    if (msg) {
      console.log("Received:", msg.content.toString());
      channel.ack(msg);
    }
  });
}