module.exports =[{
	name: "withdraw",
	code: `
	$description[How much do you want to withdraw, $username?]
	$color[Yellow]
	$addButton[1;Input;secondary;input5;false]`
},
{
	name: "input5",
	type: 'interaction',
	prototype: 'button',
	code: `
	$interactionModal[Withdraw Money;withdrawwid;
	{actionRow:{textInput:How much you want to deposit?:1:withdraw6:false:how much do you need?:2:200}]`
},
{
	name: "withdrawwid",
	type: 'interaction',
	prototype: 'modal',
	code: `
	$interactionReply[{newEmbed:{description: $textInputValue[withdraw6] has been withdraw from your bank.}{color: Yellow}};everyone;false;false]
	$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID;eco];$textInputValue[withdraw6]];$authorID;eco]
	$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;eco];$textInputValue[withdraw6]];$authorID;eco]
	$onlyIf[$textInputValue[withdraw6]=>$getGlobalUserVar[money;$authorID;eco];You don't have enough money to withdraw that much.]`
}]