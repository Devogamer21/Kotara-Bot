module.exports ={
	name: "beg",
	code: `
	$description[$randomText[Poor guy, here $get[randommoney]$;You are still begging? Unbeliavable, here $get[randommoney]$;You picked up some trash and put it into trash can, a guy gave you $get[randommoney]$ for that.]]
	$color[Yellow]
	$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;main];$get[randommoney]];$authorID;main]
	$let[randommoney;$random[1;10]]
	$globalCooldown[5s;you are a beggar]`
}