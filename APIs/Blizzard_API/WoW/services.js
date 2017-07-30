const axios = require('axios');

const address = "https://us.api.battle.net/wow/";
const imageaddress = "http://render-us.worldofwarcraft.com/character/";
const key = "m8uvxdrkx62fdy7gbe3ybjj76sa63b4y";


var WoWServices = module.exports = {};

WoWServices.GetCharacterProfile = (user, realm) => axios.get(address + `character/${realm}/${user}`, {
    params: {
        locale: "en_US",
        apikey: key
    }
});

WoWServices.GetCharacterAppearance = (user, realm) => axios.get(address + `character/${realm}/${user}`, {
    params: {
        fields: "appearance",
        locale: "en_US",
        apikey: key
    }
});

WoWServices.GetCharacterAchievements = (user, realm) => axios.get(address + `character/${realm}/${user}`, {
    params: {
        fields: "achievements",
        locale: "en_US",
        apikey: key
    }
});

WoWServices.GetCharacterFeed = (user, realm) => axios.get(address + `character/${realm}/${user}`, {
    params: {
        fields: "feed",
        locale: "en_US",
        apikey: key
    }
});

WoWServices.GetCharacterItems = (user, realm) => axios.get(address + `character/${realm}/${user}`, {
    params: {
        fields: "items",
        locale: "en_US",
        apikey: key
    }
});

WoWServices.GetCharacterProfessions = (user, realm) => axios.get(address + `character/${realm}/${user}`, {
    params: {
        fields: "professions",
        locale: "en_US",
        apikey: key
    }
});


WoWServices.GetCharacterProgression = (user, realm) => axios.get(address + `character/${realm}/${user}`, {
    params: {
        fields: "progression",
        locale: "en_US",
        apikey: key
    }
});

WoWServices.GetCharacterReputation = (user, realm) => axios.get(address + `character/${realm}/${user}`, {
    params: {
        fields: "reputation",
        locale: "en_US",
        apikey: key
    }
});

WoWServices.GetCharacterStatistics = (user, realm) => axios.get(address + `character/${realm}/${user}`, {
    params: {
        fields: "statistics",
        locale: "en_US",
        apikey: key
    }
});

WoWServices.GetCharacterStats = (user, realm) => axios.get(address + `character/${realm}/${user}`, {
    params: {
        fields: "stats",
        locale: "en_US",
        apikey: key
    }
});


WoWServices.GetSpell = (id) => axios.get(address + `spell/${id}`, {
    params: {
        locale: "en_US",
        apikey: key
    }
});


WoWServices.GetItem = (id) => axios.get(address + `item/${id}`, {
    params: {
        locale: "en_US",
        apikey: key
    }
});


WoWServices.GetItemSet = (id) => axios.get(address + `item/${id}`, {
    params: {
        locale: "en_US",
        apikey: key
    }
});


WoWServices.GetDataCharacterRaces;
WoWServices.GetDataCharacterClasses;

axios.get(address+"data/character/races", {
    params: {
        locale: "en_US",
        apikey: key
    }
}) 
.then(function (response) {
	WoWServices.GetDataCharacterRaces = response.data.races;	
})
.catch(function (error) {
		console.log("Error" + error) ;
});


axios.get(address + "data/character/classes", {
    params: {
        locale: "en_US",
        apikey: key
    }
})
.then(function (response) {
	WoWServices.GetDataCharacterClasses = response.data.classes;	
})
.catch(function (error) {
		console.log("Error" + error) ;
});




/*
WoWServices.GetImageAvatar = (user, realm) => {
	var thumbnail;
	WoWServices.GetCharacterProfile(user, realm)
			.then(function (response) {
				console.log("response "+ response.data + " , " + Object.keys(response.data));
				response.data.forEach( (i) => console.log(i));
			    thumbnail = response.data;
		  	})
		  	.catch(function (error) {
		  		console.log("Error" + error) ;
		  	});

	  console.log("thumbnail: " + thumbnail);
	if(thumbnail != undefined)
  		return axios.get(imageaddress+thumbnail);
}
*/