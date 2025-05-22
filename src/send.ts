import amqp from 'amqplib';

export async function sendMessage(): Promise<void> {
  const conn = await amqp.connect('amqp://localhost')
  const channel = await conn.createChannel()
  const queue = 'hello'
  const message = 'Hello!'

  await channel.assertQueue(queue, { durable: false })
  channel.sendToQueue(queue, Buffer.from(message))
  console.log(`Sent: ${message}`)

  setTimeout(() => {
    conn.close()
  }, 500);
}