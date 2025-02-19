module.exports = [{
	name: "npm",
	code: `
	$title[NPM - ****$getObjectProperty[data;name]****]
	$description[
	**Version** : **$getObjectProperty[data;version]**
	**Description** : **$getObjectProperty[data;description]**
	**Downlaod This year** : **$getObjectProperty[data;downloads_this_year]**]
	$onlyIf[$getObjectProperty[data;name]!=undefined;Failed to get npm !]
	$createObject[data;$jsonRequest[https://api.popcat.xyz/npm?q=$message]]
	$addButton[1;Link The Package;link;https://npm.com/package/$message;false]
	$color[Random]
	`
},
	];