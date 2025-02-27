module.exports = [{
	name:"use",
	$if:"old",
	code:`
	$if[$message==daily box]
	$title[1;Daily Box]
	$description[1;How Many Box to open]
	$addButton[1;input;secondary;input1;false]
	$endif
	$if[$message==burger]
	$title[2;Burger]
	$description[2;How Many Burger to eat]
	$addButton[1;input;secondary;input2;false]
	$endif
	$if[$message==pizza]
	$title[4;Pizza]
	$description[3;How Many Pizza to eat]
	$addButton[1;input;secondary;input3;false]
	$endif
	`
},
{
	name:"input1",
	type:"interaction",
	prototype:"button",
	code:`
	$interactionModal[Input;dailybox;{actionRow:
	{textInput:How Many Box?:1:dailyboxid:true:Pls how many:1:200}}]`
	
},
{
	name:"dailybox",
	type:"interaction",
	prototype:"modal",
	code:`
	$interactionReply[;
	{newEmbed:
	{title:Opening Daily Box}
	{description:You opened $$get[money] and 2 X $get[items] }
	{color:Yellow}}]
	$setGlobalUserVar[$get[items];$sum[$getGlobalUserVar[$get[items];$authorID;main];2];$authorID;main]
	$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;main];$let[money];$authorID;main]
	$let[items;$randomText[fishing_rod;pizza;burger;laptop;fishing_rod;pizza;burger;laptop;fishing_rod;pizza;burger;laptop;fishing_rod;pizza;burger;laptop;fishing_rod;pizza;burger;laptop;fishing_rod;pizza;burger;laptop;fishing_rod;pizza;burger;laptop;fishing_rod;pizza;burger;laptop;fishing_rod;pizza;burger;laptop]]
	$let[money;$random[100;5000]]
	$onlyIf[$getGlobalUserVar[daily_box;$authorID;main]>=1;You don't have any daily box to open.]]
	`
},
{
	name:"input2",
	type:"interaction",
	prototype:"button",
	code:`
	$interactionModal[input;burger;{actionRow:
	{textInput:How Many Burger?:1:burger:true:Pls how many:1:200}}]`
	
},
{
	name:"burger",
	type:"interaction",
	prototype:"modal",
	code:`
	$interactionReply[;{newEmbed:{title:Eating Burger}{description:You ate and got $get[math]XP }{color:Yellow}}]
	$setGlobalUserVar[burger;$sub[$getGlobalUserVar[burger;$authorID;main];$textInputValue[burger]];$authorID;main]
	$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp;$authorID;main];$get[math]];$authorID;main]
	$let[math;$math[$textInputValue[burger]*70]]
	`
},{
	name:"input3",
	type:"interaction",
	prototype:"button",
	code:`
	$interactionModal[input;pizza;{actionRow:
	{textInput:How Many Pizza?:1:pizza:true:Pls how many:1:200}}]`
	
},{
	name:"pizza",
	type:"interaction",
	prototype:"modal",
	code:`
	$interactionReply[;{newEmbed:{title:Eating Pizza}{description:You ate and got $get[math]XP }{color:Yellow}};;;false;everyone]
	$setGlobalUserVar[pizza;$sub[$getGlobalUserVar[pizza;$authorID;main];$textInputValue[pizza]];$authorID;main]
	$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp;$authorID;main];$get[math]];$authorID;main]
	$let[math;$math[$textInputValue[pizza]*50]]
	`
},]