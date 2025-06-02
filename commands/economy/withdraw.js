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
		$interactionReply[{newEmbed:{description: $get[amount] has been deposited into your bank.}{color: Yellow}};everyone;false;false]
	$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$authorID;eco];$get[amount]];$authorID;eco]
	$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID;eco];$get[amount]];$authorID;eco]
	
	$let[amount;$advancedReplaceText[$checkCondition[$textInputValue[withdraw6]==all];true;$getGlobalUserVar[money;$authorID;eco];false;$textInputValue[withdraw6]]]
	$onlyIf[$textInputValue[withdraw6]<=$getGlobalUserVar[money;$authorID;eco];You don't have enough money to deposit that much.]`
}]