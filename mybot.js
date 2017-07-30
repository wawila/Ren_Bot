const Discord = require('discord.js');
const config = require("./config.json");
const fs = require("fs");
const WoW = require("./Apis/Blizzard_API/WoW/inputcontroller.js");

const client = new Discord.Client();


const token = config.token;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	let text = message.content.toLowerCase();
	
	if (!message.content.startsWith(config.prefix) || message.author.bot)
		return;


	if(text.startsWith("+wow")) {
		let m = WoW.inputs(text); 
		
		if(m === undefined)
			return;

		console.log("m ", m);
		message.channel.send(m.data, {
		    	file: m.file
		    });
	}

    if(text.startsWith(config.prefix + "ping")) 
    	message.channel.send('pong');

    if(text.startsWith(config.prefix + "prefix")) {
	 	 let newPrefix = text.split(" ").slice(1, 2)[0];

	 	 config.prefix = newPrefix;

	  	fs.writeFile("./config.json", JSON.stringify(config, null, 4), (err) => console.error);
	  		message.channel.send("New prefix: "+config.prefix);
	}

});

// Log our bot in
client.login(token);

