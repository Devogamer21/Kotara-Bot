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
	$if[$textInputValue[depositid1]==all;
	$interactionReply[{newEmbed:{description: $textInputValue[depositid1] has been deposited into your bank.}{color: Yellow}};everyone;false;false]
	$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$authorID;eco];$getGlobalUserVar[money;$authorID;eco]];$authorID;eco]
	$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID;eco];$getGlobalUserVar[bank;$authorID;eco]];$authorID;eco]
	;you wrong lmao]


	$onlyIf[$textInputValue[depositid1]<=$getGlobalUserVar[money;$authorID;eco];You don't have enough money to deposit that much.]`
}]