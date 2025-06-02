function handleKucinkCommand(client, message) {
  const messageText = "Bakekok cukurukuk onde mande abcd";

  client.sendMessage(message.from, messageText);
}

module.exports = handleKucinkCommand;
