module.exports = {
	name:"fish",
	code:`
	$title[1;Fishing]
	$description[you fishing and you got $get[randomfish] 🐟]
	$setGlobalUserVar[$get[randomfish];$sum[$getGlobalUserVar[$get[randomfish];$authorID;eco];1];$authorID;eco]
	$let[randomfish;$randomText[fish;good_fish;super_fish;nothing;nothing;nothing;nothing;stick;stick;stick;stick;stick;stick;stick;stick;stick;stick;stick;stick;stick;fish;fish;fish;fish;fish;fish;fish;fish;fish;fish;fish;fish;fish;fish]
	$globalCooldown[2m;Please wait %time% to execute this command again.]]
	$onlyIf[$getGlobalUserVar[fishing_rod;$authorID;eco]>=1;You don't have a fishing rod]`
}