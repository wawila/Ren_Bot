/*
 A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'MzM5NDE1OTUzODg2NDEyODEw.DF7tUg.5NaGYLnwXnCBVWBCB-6QXPFFl_o';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
    console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
	console.log(message.content);
    // If the message is "ping"
    if (message.content.startsWith("ping")) {
    // Send "pong" to the same channel
    message.channel.send('pong');
}
});

// Log our bot in
client.login(token);
