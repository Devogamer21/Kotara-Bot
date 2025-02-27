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
	$interactionModal[Withdraw Money;withdrawid;
	{actionRow:
		{textInput: How much you want to withdraw?:1:withdraw1:false::1:10}}]`
},
{
	name: "withdrawid",
	type: 'interaction',
	prototype: 'modal',
	code: `
	$interactionReply[;{newEmbed:
	{description: $textInputValue[withdraw1] has been withdraw from your bank.}
	{color: Yellow}}]
	$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID;main];$textInputValue[withdraw1]];$authorID;main]
	$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;main];$textInputValue[withdraw1]];$authorID;main]
	$onlyIf[$textInputValue[withdraw1]=>$getGlobalUserVar[money;$authorID;main];You don't have enough money to withdraw that much.]`
}]