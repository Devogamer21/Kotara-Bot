module.exports=[{
	name:"gamepasses",
	code:`
	$title[Gamepasses]
	$description[Please Choose one]
	$footer[this is once in a lifetime]
	$addSelectMenu[1;string;gamepassmenu;Select a gamepass;1;1;false;Weekly:Can get every week:weekly]
	`
},
{
	name:"gamepassmenu",
	type:"interaction",
	prototype:"selectMenu",
	code:`
	$interactionReply[;{newEmbed:{title:Are you sure?}{description:
	are you sure you want to buy this gamepass?}{color:RED}};{actionRow:{button:Yes:success:weekly:false}
	;;yes]
	$onlyIf[$getGlobalUserVar[weeklygamepass;$authorID;eco]==true;You already have a weekly gamepass!]
	$onlyIf[$interactionData[values[0]]==weekly;]`
},{
	name:"button",
	type:"interaction",
	prototype:"button",
	code:`
	$title[Buying Weekly Gamepass]
	$description[You Bought A Weekly Gamepass]
	$addField[Receipt;-10000]
	$addTimeStamp
	$setGlobalUserVar[weeklygamepass;true;$authorID;eco]
	$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID;eco];10000];$authorID;eco]`
}]