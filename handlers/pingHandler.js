function handlePingCommand(client, message) {
  const messageText = "Pong";

  client.sendMessage(message.from, messageText);
}

module.exports = handlePingCommand;
