export async function pingHandler(message, client) {
  await client.sendMessage(message.from, "ponk!");
}
