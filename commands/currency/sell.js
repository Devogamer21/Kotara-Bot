module.exports=[{
	name:'sell',
	$if:'old',
	code:`
	$if[$message==fish]
	$title[Selling Fish]
	$description[How many fish do you want to sell?]
	$addField[Fishes; You have $getGlobalUserVar[fish;$authorID;eco] fishes]
	$addButton[1;Input;secondary;sellfish;false]
	$endif
	$if[$message==burger]
	$title[Selling Burgers]
	$description[How many burgers do you want to sell?]
	$addField[1;Burgers;You have $getGlobalUserVar[burger;$authorID;eco] burgers.]
	$addButton[1;Input;secondary;sellburger;false]
	$endif
	`
},{
name:"sellfish",
type:"interaction",
prototype:"button",
code:`
$interactionModal[fishsell;fishsell;{actionRow:
{textInput:How Many fish ?:1:sfishid:false:Pls how many:1:200}}]`
},{
	name:"fishsell",
	type:"interaction",
	prototype:"modal",
	code:`	 
			$interactionReply[Thanks for submitting this for selling!;;;;everyone;true]
			$title[selling]
			$description[You selling fish]
			$addField[Receipt;+$$math[$textInputValue[sfishid]*15] x $textInputValue[sfishid]]
			$addField[Balance;$$getGlobalUserVar[money;$authorID;eco]]
			$setGlobalUserVar[fish;$sub[$getGlobalUserVar[fish;$authorID;eco];$textInputValue[sfishid]];$authorID;eco]
			$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;eco];$math[$textInputValue[sfishid]*15]];$authorID;eco]
			$onlyIf[$getGlobalUserVar[fish;$authorID;eco]>=$textInputValue[sfishid];You don't have enough fish]
			$deleteCommand`
	},{
			   name:"sellburger",
			   type:"interaction",
			   prototype:"button",
			   code:`
			   $interactionModal[Selling Burger;burgersell;{actionRow:
			   {textInput:How Many fish ?:1:sburgerid:false:Pls how many:1:200}}]`
			   },{
			name:"burgersell",
			type:"interaction",
			prototype:"modal",
			code:`

			$interactionReply[Thanks for submitting this for Selling;;;;everyone;true]
			
						   $title[selling]
						   $description[You selling burger]
						   $addField[Receipt;+$$math[$textInputValue[sburgerid]*70] x $textInputValue[sburgerid]]
						   $addField[Balance;$$getGlobalUserVar[money;$authorID;eco]]
						   $setGlobalUserVar[burger;$sub[$getGlobalUserVar[burger;$authorID;eco];$textInputValue[sburgerid]];$authorID;eco]
						   $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;eco];$math[$textInputValue[sburgerid]*70]];$authorID;eco]
						   $onlyIf[$getGlobalUserVar[burger;$authorID;eco]>=$textInputValue[sburgerid];You don't have enough fish]
						   $deleteCommand`
				   },]
