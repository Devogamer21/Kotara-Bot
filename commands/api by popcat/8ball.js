module.exports={
	name:"8ball",
	code:`
	$reply[$messageID;true]
	$title[8Ball 🎱]
	$description[$jsonRequest[https://api.popcat.xyz/8ball;answer;Error]]
	$color[Random]`
}