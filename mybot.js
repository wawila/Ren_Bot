/*
 A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');
const config = require("./config.json");
const fs = require("fs");
// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = config.token;

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
    console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
	console.log(message.content);
	if (!message.content.startsWith(config.prefix)|| message.author.bot)
		return;
    // If the message is "ping"
    if (message.content.startsWith(config.prefix + "ping")) 
    // Send "pong" to the same channel
    message.channel.send('pong');

    if(message.content.startsWith(config.prefix + "prefix")) {
 		 // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
 	 let newPrefix = message.content.split(" ").slice(1, 2)[0];
 	 // change the configuration in memory
 	 config.prefix = newPrefix;

  	// Now we have to save the file.
  	fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  	message.channel.send("New prefix: "+config.prefix);
	}

});

// Log our bot in
client.login(token);
