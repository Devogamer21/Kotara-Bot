module.exports = {
	name:"postmemes",
	code:`
	$title[Posted Memes On REddit]
	$description[You posted]
	$image[1;$getObjectProperty[data;image]]
	$addfield[Memes Posted;  $$random[1;600] Money]
	$addField[upvoted; $getObjectProperty[data;upvotes] Upvotes]
	$addField[comments; $getObjectProperty[data;comments] Comments]
	$footer[+$$random[1;600] | Balance : $$getGlobalUserVar[money;$authorID;main] Money]
	$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;main];$random[1;600]];$authorID;main]
	$createObject[data;$jsonRequest[https://api.popcat.xyz/meme]]
	$color[Random]
	$onlyIf[$getGlobalUserVar[laptop;$authorID;main]>0;Bro You broke!!1 (you need to buy laptop)]
	`
}