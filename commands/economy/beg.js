module.exports ={
	name: "beg",
	code: `
	$description[$randomText[Poor guy, here $get[randommoney]$;You are still begging? Unbeliavable, here $get[randommoney]$;You picked up some trash and put it into trash can, a guy gave you $get[randommoney]$ for that.]]
	$color[Yellow]
	$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;eco];$get[randommoney]];$authorID;eco]
	$let[randommoney;$random[1;10]]
	$globalCooldown[5s;you are a beggar]`
}