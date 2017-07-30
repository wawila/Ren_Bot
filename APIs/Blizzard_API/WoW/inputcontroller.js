const WoW = require("./services.js");
const Discord = require("discord.js");


var controller = module.exports = {};


controller.inputs = (message, prefix) => {
	let text = message.content.toLowerCase();

	if(!text.startsWith(prefix+"wow"))
		return;

	if(text.startsWith(prefix+"wow pro"))
	{	
		characterprofile(message);	
		return;	
	}
	if(text.startsWith(prefix+"wow attr"))
	{
		characterattributes(message);
		return;	
	}
	if(text.startsWith(prefix+"wow enh"))
	{
		characterenhancements(message);
		return;	
	}
	if(text.startsWith(prefix+"wow lev"))
	{
		characterlevels(message);
		return;	
	}
	if(text.startsWith(prefix+"wow atta"))
	{
		characterattack(message);
		return;	
	}
	if(text.startsWith(prefix+"wow spe"))
	{
		characterspell(message);
		return;	
	}
	if(text.startsWith(prefix+"wow def"))
	{
		characterdefence(message);
		return;	
	}

}


var characterprofile = (message) => {
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

var characterattributes = (message) => {
		let content = message.content.split(" ");
		let id = content[2];
		let realm = content[3];

		WoW.GetCharacterCompleteStats(id, realm)
			.then(function (response) {
				let stats = response.data.stats;
				let image = response.data.thumbnail.split("-")[0] + "-inset.jpg";

				let data = `${response.data.name} - ${response.data.realm}\n`;
				data += `${getSpec(response.data)} \tLevel ${response.data.level}\n`;
				data += `\nStrength \t\t${stats.str}\n`;
				data += `Agility    \t\t${stats.agi}\n`;
				data += `Intellect \t\t${stats.int}\n`;
				data += `Stamina \t\t${stats.sta}\n`;

				message.channel.send(data, {
			    	file: `http://render-us.worldofwarcraft.com/character/${image}`
			    });

			})
			.catch(function(error) {
	            console.log("Error" + error);
			    message.channel.send("Player not found");
	        });
}


var characterenhancements = (message) => {
		let content = message.content.split(" ");
		let id = content[2];
		let realm = content[3];

		WoW.GetCharacterCompleteStats(id, realm)
			.then(function (response) {
				let stats = response.data.stats;
				let image = response.data.thumbnail.split("-")[0] + "-inset.jpg";

				let data = `${response.data.name} - ${response.data.realm}\n`;
				data += `${getSpec(response.data)} \tLevel ${response.data.level}\n`;
				data += `\nCritical     \t\t${stats.crit.toFixed(2)}%\n`;
				data += `Haste        \t\t${stats.haste.toFixed(2)}%\n`;
				data += `Mastery    \t\t${stats.mastery.toFixed(2)}%\n`;
				data += `Leech        \t\t${stats.leech.toFixed(2)}%\n`;
				data += `Versatility\t\t${stats.versatilityDamageDoneBonus.toFixed(2)}%\n`;
				data += `Avoidance\t\t${stats.avoidanceRatingBonus.toFixed(2)}%\n`;

				message.channel.send(data, {
			    	file: `http://render-us.worldofwarcraft.com/character/${image}`
			    });

			})
			.catch(function(error) {
	            console.log("Error" + error);
			    message.channel.send("Player not found");
	        });
}

var characterattack = (message) => {
		let content = message.content.split(" ");
		let id = content[2];
		let realm = content[3];

		WoW.GetCharacterCompleteStats(id, realm)
			.then(function (response) {
				let stats = response.data.stats;
				let image = response.data.thumbnail.split("-")[0] + "-inset.jpg";

				let data = `${response.data.name} - ${response.data.realm}\n`;
				data += `${getSpec(response.data)} \tLevel ${response.data.level}\n`;
				data += `\nDamage        \t\t${stats.mainHandDmgMin} - ${stats.mainHandDmgMax}\n`;
				data += `Main Hand DPS     \t\t${stats.mainHandDps.toFixed(2)}\n`;
				data += `Off Hand DPS      \t\t${stats.offHandDps.toFixed(2)}\n`;
				data += `Speed      \t\t${stats.mainHandSpeed.toFixed(2)}\n`;

				message.channel.send(data, {
			    	file: `http://render-us.worldofwarcraft.com/character/${image}`
			    });
			})
			.catch(function(error) {
	            console.log("Error" + error);
			    message.channel.send("Player not found");
	        });
}

var characterdefence = (message) => {
		let content = message.content.split(" ");
		let id = content[2];
		let realm = content[3];

		WoW.GetCharacterCompleteStats(id, realm)
			.then(function (response) {
				let stats = response.data.stats;
				let image = response.data.thumbnail.split("-")[0] + "-inset.jpg";

				let data = `${response.data.name} - ${response.data.realm}\n`;
				data += `${getSpec(response.data)} \tLevel ${response.data.level}\n`;
				data += `\nArmor   \t\t${stats.armor}\n`;
				data += `Dodge    \t\t${stats.parry.toFixed(2)}%\n`;
				data += `Parry    \t\t${stats.dodge.toFixed(2)}%\n`;
				data += `Block    \t\t${stats.block.toFixed(2)}%\n`;

				message.channel.send(data, {
			    	file: `http://render-us.worldofwarcraft.com/character/${image}`
			    });
			})
			.catch(function(error) {
	            console.log("Error" + error);
			    message.channel.send("Player not found");
	        });
}

var characterspell = (message) => {
		let content = message.content.split(" ");
		let id = content[2];
		let realm = content[3];

		WoW.GetCharacterCompleteStats(id, realm)
			.then(function (response) {
				let stats = response.data.stats;
				let image = response.data.thumbnail.split("-")[0] + "-inset.jpg";

				let data = `${response.data.name} - ${response.data.realm}\n`;
				data += `${getSpec(response.data)} \tLevel ${response.data.level}\n`;
				data += `\nSpell Power   \t\t${stats.int}\n`;
				data += `Mana Regen      \t\t${stats.mana5}\n`;
				data += `Combat Regen    \t\t${stats.mana5Combat}\n`;

				message.channel.send(data, {
			    	file: `http://render-us.worldofwarcraft.com/character/${image}`
			    });
			})
			.catch(function(error) {
	            console.log("Error" + error);
			    message.channel.send("Player not found");
	        });
}

var characterlevels = (message) => {
		let content = message.content.split(" ");
		let id = content[2];
		let realm = content[3];

		WoW.GetCharacterCompleteStats(id, realm)
			.then(function (response) {
				let image = response.data.thumbnail.split("-")[0] + "-profilemain.jpg";

				let data = getStatsHeader(response.data);

				message.channel.send(data, {
			    	file: `http://render-us.worldofwarcraft.com/character/${image}`
			    });

			})
			.catch(function(error) {
	            console.log("Error" + error);
			    message.channel.send("Player not found");
	        });
}

var getSpec = (data) => {
	let talents = data.talents;
	let spec; 	

	talents.forEach((t) => {
		if(t.selected === undefined || t.selected === false)
			return;

		spec = t.spec.name;
		return;
	});	

	return spec;
}

var getStatsHeader = (data) => {
	let out = `${data.name} - ${data.realm}\n`;
	out += `${getSpec(data)} \tLevel ${data.level}\n`;
	out += `\nHealth ${data.stats.health} \t${data.stats.powerType} ${data.stats.power}\n`;
	out += `Avg iLVL ${data.items.averageItemLevelEquipped} \tBest ${data.items.averageItemLevel}\n`;

	return out;
}