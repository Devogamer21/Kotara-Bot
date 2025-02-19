module.exports = [{
	name: "periodictable",
	code: `
	$title[Periode Table]
	$thumbnail[$getObjectProperty[data;image]]
	$description[
	**Name** : **$getObjectProperty[data;name]**
	**Symbol** : **$getObjectProperty[data;symbol]**
	**Period** : $getObjectProperty[data;period]
	]
	$color[Random]
	$onlyIf[$getObjectProperty[data;name]!=undefined;Failed to fetch the element!]
	$createObject[data;$jsonRequest[https://api.popcat.xyz/periodic-table?element=$message]]
	`
}];