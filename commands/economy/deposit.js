module.exports =[{
	name: "deposit",
	code: `
	$description[How much do you want to deposit, $username?]
	$color[Yellow]
	$addButton[1;Input;secondary;input;false]`
},
{
	name: "input",
	type: 'interaction',
	prototype: 'button',
	code: `
	$interactionModal[Deposit Money;depositid;
	{actionRow:
	{textInput:How much you want to deposit?:1:depositid1:false:how much do you need?:2:200}]`
},
{
	name: "depositid",
	type: 'interaction',
	prototype: 'modal',
	code: `
	$interactionReply[{newEmbed:{description: $get[amount] has been deposited into your bank.}{color: Yellow}};everyone;false;false]
	$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$authorID;eco];$get[amount]];$authorID;eco]
	$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID;eco];$get[amount]];$authorID;eco]
	
	$let[amount;$advancedReplaceText[$checkCondition[$textInputValue[depositid1]==all];true;$getGlobalUserVar[money;$authorID;eco];false;$textInputValue[depositid1]]]
	$onlyIf[$textInputValue[depositid1]<=$getGlobalUserVar[money;$authorID;eco];You don't have enough money to deposit that much.]`
}]