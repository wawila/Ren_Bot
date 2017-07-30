const WoW = require("./services.js");

var manager = module.exports = {};


manager.inputs = (message) => {
	if(!message.startsWith("+wow"))
		return {"data" : "asdasdsads", "file": undefined};;

	if(message.startsWith("+wow pro"))
	{	
		let a = wowcharacterprofile(message); 
		return a;
    }
    	return {"data" : "asdasdsads", "file": undefined};
}


var wowcharacterprofile = (message) => {
	let content = message.split(" ");
	let id = content[2];
	let realm = content[3];
	let out ;

	var xc =  WoW.GetCharacterProfile(id, realm);
		

    return out === undefined ?
    	xc.then(function (response) {
			let image = response.data.thumbnail.split("-")[0] + "-profilemain.jpg";

			let data = `${response.data.name} - ${response.data.realm}\n`;
			data += `${WoW.GetDataCharacterRaces[response.data.race-1].name} - ${WoW.GetDataCharacterClasses[response.data.class-1].name}\n`;
			data += `${response.data.faction == 0 ? "Alliance" : "Horde"} Level ${response.data.level}`;
    		

    		 out = {"data": data, "file": `http://render-us.worldofwarcraft.com/character/${image}`};
	  	})
        .catch(function(error) {
            console.log("Error" + error);
		    message.channel.send("Player not found");
        })

    :
    	out;
}