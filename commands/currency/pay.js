module.exports = {
	name:"pay",
	code:`
	$title[Paying Money]
	$description[You paid $username[$mentioned[1]] $message[2]$]
	$addField[**Balance**;$$getGlobalUserVar[money;$authorID;main]]
	$addField[**Balance $username[$mentioned[1]]**;$$getGlobalUserVar[money;$mentioned[1];main]]
	$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$mentioned[1]];$message[2]];$mentioned[1];main]
	$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$message[2]];$authorID;main]`
}