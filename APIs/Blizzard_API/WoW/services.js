const axios = require('axios');

const address = "https://us.api.battle.net/wow/";
const key = "m8uvxdrkx62fdy7gbe3ybjj76sa63b4y";


var GetCharacterProfile = (user, realm) => axios.get(address+`character/${realm}/${user}`, {
									    params: {
									    	locale: "en_US",
									      	apikey: key
									    } 
								 	 });

var GetCharacterAppearance = (user, realm) => axios.get(address+`character/${realm}/${user}`, {
									    params: {
									    	fields: "appearance",
									    	locale: "en_US",
									      	apikey: key
									    } 
								 	 });

var GetCharacterAchievements = (user, realm) => axios.get(address+`character/${realm}/${user}`, {
									    params: {
									    	fields: "achievements",
									    	locale: "en_US",
									      	apikey: key
									    } 
								 	 });

var GetCharacterFeed = (user, realm) => axios.get(address+`character/${realm}/${user}`, {
									    params: {
									    	fields: "feed",
									    	locale: "en_US",
									      	apikey: key
									    } 
								 	 });

var GetCharacterItems = (user, realm) => axios.get(address+`character/${realm}/${user}`, {
									    params: {
									    	fields: "items",
									    	locale: "en_US",
									      	apikey: key
									    } 
								 	 });

var GetCharacterProfessions = (user, realm) => axios.get(address+`character/${realm}/${user}`, {
									    params: {
									    	fields: "professions",
									    	locale: "en_US",
									      	apikey: key
									    } 
								 	 });
									  

var GetCharacterProgression = (user, realm) => axios.get(address+`character/${realm}/${user}`, {
									    params: {
									    	fields: "progression",
									    	locale: "en_US",
									      	apikey: key
									    } 
								 	 });

var GetCharacterReputation = (user, realm) => axios.get(address+`character/${realm}/${user}`, {
									    params: {
									    	fields: "reputation",
									    	locale: "en_US",
									      	apikey: key
									    } 
								 	 });

									
GetCharacterFeed("Candrys", "Tichondrius").then(function (response) {
									    console.log(response.data);
									  })
									  .catch(function (error) {
									    console.log(error);
									  });