module.exports =[{
	name: "withdraw",
	code: `
	$description[How much do you want to withdraw, $username?]
	$color[Yellow]
	$addButton[1;Input;secondary;input2;false]`
},
{
	name: "input2",
	type: 'interaction',
	prototype: 'button',
	code: `
	$interactionModal[Deposit Money;withdrawid;
	{actionRow:
	{textInput:How much you want to deposit?:1:withdraw1:false:how much do you need?:2:200}]`
},
{
	name: "withdrawid",
	type: 'interaction',
	prototype: 'modal',
	code: `
	$interactionReply[{newEmbed:{description: $textInputValue[withdraw1] has been withdraw from your bank.}{color: Yellow}};everyone;false;false]
	$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID;eco];$textInputValue[withdraw1]];$authorID;eco]
	$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;eco];$textInputValue[withdraw1]];$authorID;eco]
	$onlyIf[$textInputValue[withdraw1]=>$getGlobalUserVar[money;$authorID;eco];You don't have enough money to withdraw that much.]`
}]