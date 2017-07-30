const Discord = require('discord.js');
const config = require("./config.json");
const WoW = require("./Apis/Blizzard_API/WoW/inputcontroller.js");
const fs = require("fs");
const client = new Discord.Client();


const token = config.token;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	let text = message.content.toLowerCase();

	if (!message.content.startsWith(config.prefix) || message.author.bot)
		return;


	if(text.startsWith(config.prefix + "wow"))
		WoW.inputs(message, config.prefix);

    if (text.startsWith(config.prefix + "ping")) 
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

/*
var inputmanager = (message) => {
		console.log(WoW.GetDataCharacterRaces, WoW.GetDataCharacterRaces[0]);
	if(message.content.startsWith("+wow pro"))
	{
		wowcharacterprofile();
    }
}


var wowcharacterprofile = () => {
		let content = message.content.split(" ");
		let id = content[2];
		let realm = content[3];

		WoW.GetCharacterProfile(id, realm)
			.then(function (response) {
				let image = response.data.thumbnail.split("-")[0] + "-profilemain.jpg";

				let data = `${response.data.name} - ${response.data.realm}\n`;
				data += `${WoW.GetDataCharacterRaces[response.data.race-1].name} - ${WoW.GetDataCharacterClasses[response.data.class-1].name}\n`;
				data += `${response.data.faction == 0 ? "Alliance" : "Horde"} Level ${response.data.level}`;
        		
        		message.channel.send(data, {
			    	file: `http://render-us.worldofwarcraft.com/character/${image}`
			    });

		  	})
	        .catch(function(error) {
	            console.log("Error" + error);
			    message.channel.send("Player not found");
	        });
}
*/