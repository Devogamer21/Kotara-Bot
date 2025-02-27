module.exports = [
  {
	name: "buy",
	code:`
	 $title[Item]
	 $description[BUY COMMANDS]
	 $addSelectMenu[1;string;buy;Buy items;1;1;false;Pizza:Good Pizza That Cost 70$ :pizza:false;Burger:Good Burger that cost 50$:burger:false;Shards:Shards Cool things about shards:shards:false;Fishing rod:Fishing Simulator that cost 140$:fishingrod;Laptop:Stil Posting Memes in 2014? well that cost 140:laptop]
  `
  },
  {
	name: "buy",
	type: "interaction", // clarifying that this command is an Interaction
	prototype: "selectMenu",
	code: `
	 $title[Buying Burger]
	 $description[please input how many you need]
	 $addField[Price;70]
	 $addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
	 $addButton[1;Input;secondary;burgerbutton;false]
	 $onlyIf[$interactionData[values[0]]==burger;]
	 `
  },
  {
	name: "buy",
	type: "interaction", // clarifying that this command is an Interaction
	prototype: "selectMenu",
	code: `
	 $title[Buying Pizza]
	 $description[please input how many you need]
	 $addField[Price;50]
	 $addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
	 $addButton[1;Input;secondary;pizzabutton;false]
	 $onlyIf[$interactionData[values[0]]==pizza;]
	 `
  },  {
		name: "buy",
		type: "interaction", // clarifying that this command is an Interaction
		prototype: "selectMenu",
		code: `
		 $title[Buying laptop]
		 $description[please input how many you need]
		 $addField[Price;140]
		 $addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
		 $addButton[1;Input;secondary;laptopbutton;false]
		 $onlyIf[$interactionData[values[0]]==laptop;]
		 `
	  },
	 {
		name: "buy",
		type: "interaction", // clarifying that this command is an Interaction
		prototype: "selectMenu",
		code: `
		 $sendMessage[{newEmbed:
		 {title:Buying Shards}:
		 {description:**WARNING!!!**
		 You can't sell or trash it!!!!
		 Please input the number of shards you need!}
		 {field:Price:75}
		 {field:Balance:$$getGlobalUserVar[money;$authorID;main]}}
		 {actionRow:{button:Input:secondary:shardsbutton:false}};false]
		 $addButton[1;Input;secondary;shardsbutton;false]
		 $onlyIf[$interactionData[values[0]]==shards;]
		 `
	  },

	
	  {
		name: "buy",
		type: "interaction", // clarifying that this command is an Interaction
		prototype: "selectMenu",
		code: `
		 $title[Buying Rod]
		 $description[please input how many you need]
		 $addField[Price;140]
		 $addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
		 $addButton[1;Input;secondary;rodbutton;false]
		 $onlyIf[$interactionData[values[0]]==fishingrod;]
		 `
	  },
	{
	  name:"pizzabutton",
	  type:"interaction",
	  prototype:"button",
	  code:`
	$interactionModal[pizza;pizza;{actionRow:
	{textInput:How Many Pizza ?:1:pizzaid:true:Pls how many:1:200}}]`
		},{
	  name:"pizza",
	  type:"interaction",
	  prototype:"modal",
	  code:`
	$interactionReply[Thanks for submitting this for Buying!;;;;everyone;true]
	$title[Buying pizza]
	$description[You Bought A Pizza]
	$addField[Receipt;-$$math[$textInputValue[pizzaid]*50]]
	$addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
	$addField[Now You Have;$getGlobalUserVar[pizza;$authorID;main]]
	$setGlobalUserVar[pizza;$sum[$getGlobalUserVar[pizza;$authorID;main];$textInputValue[pizzaid]];$authorID;main]
	$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID;main];$math[$textInputValue[pizzaid]*20]];$authorID;main]
	$onlyIf[$math[$textInputValue[pizzaid]*50]<=$getGlobalUserVar[money;$authorID;main];You don't have enough money to buy that much.]
	$deleteCommand`
	}
	,{
		name: "burgerbutton",
		type: "interaction",
		prototype: "button",
		code: `
	$interactionModal[burger;burger;{actionRow:
	{textInput:How Many Burgers ?:1:burgerid:false:Pls how many:1:200}}]`
	},
	{
		  name:"burger",
			  type:"interaction",
			  prototype:"modal",
			  code:`
			$interactionReply[Thanks for submitting this for Buying!;;;;everyone;true]
			$title[Buying pizza]
			$description[You Bought A Burger]
			$addField[Receipt;-$math[$textInputValue[burgerid]*70]$ x $textInputValue[burgerid]]
			$addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
			$setGlobalUserVar[burger;$sum[$getGlobalUserVar[burger;$authorID;main];$textInputValue[burgerid]];$authorID;main]
			$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID;main];$math[$textInputValue[burgerid]*70]];$authorID;main]
			$onlyIf[$math[$textInputValue[burgerid]*70]<=$getGlobalUserVar[money;$authorID;main];You don't have enough money to buy that much.]
			$deleteCommand`
	},
{
	name: "shardsbutton",
	type: "interaction",
	prototype: "button",
	code: `
$interactionModal[shards;shards;{actionRow:
{textInput:How Many Shards?:1:shardsid:true:Pls how many:1:200}}]`
},
{
	  name:"shards",
		  type:"interaction",
		  prototype:"modal",
		  code:`
		$interactionReply[Thanks for submitting this for Buying!;;;;everyone;true]
		$title[Buying Shards]
		$description[You Bought A Shards]
		$addField[Receipt;-$$math[$textInputValue[shardsid]*75]]
		$addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
		$setGlobalUserVar[shards;$sum[$getGlobalUserVar[shards;$authorID;main];$textInputValue[shardsid]];$authorID;main]
		$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID;main];$math[$textInputValue[shardsid]*75]];$authorID;main]
		$onlyIf[$math[$textInputValue[shardsid]*75]<=$getGlobalUserVar[money;$authorID;main];You don't have enough money to buy that much.]
		$deleteCommand`
},{
	name: "rodbutton",
	type: "interaction",
	prototype: "button",
	code: `
$interactionModal[rod;rod;{actionRow:
{textInput:How Many fishing rods?:1:rodid:true:Pls how many:1:200}}]`
},
{
	  name:"rod",
		  type:"interaction",
		  prototype:"modal",
		  code:`
		$interactionReply[Thanks for submitting this for Buying!;;;;everyone;true]
		$title[Buying Fishingrod]
		$description[You Bought A Fishing rod(s)]
		$addField[Receipt;-$$math[$textInputValue[rodid]*140 x $textInputValue[rodid]]]
		$addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
		$setGlobalUserVar[fishing_rod;$sum[$getGlobalUserVar[fishing_rod;$authorID;main];$textInputValue[rodid]];$authorID;main]
		$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID;main];$math[$textInputValue[rodid]*75]];$authorID;main]
		$onlyIf[$math[$textInputValue[rodid]*140]<=$getGlobalUserVar[money;$authorID;main];You don't have enough money to buy that much.]
		$deleteCommand`
},
{
		name: "laptopbutton",
		type: "interaction",
		prototype: "button",
		code: `
	$interactionModal[laptop;laptop;{actionRow:
	{textInput:How Many laptop?:1:laptopid:true:Pls how many:1:200}}]`
	},
	
	{
	name:"laptop",
	type:"interaction",
	prototype:"modal",
	code:`	$interactionReply[Thanks for submitting this for Buying!;;;;everyone;true]
			$title[Buying laptop]
			$description[You Bought laptop]
			$addField[Receipt;-$$math[$textInputValue[laptopid]*160] x $textInputValue[laptopid]]
			$addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
			$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop;$authorID;main];$textInputValue[laptopid]];$authorID;main]
			$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID;main];$math[$textInputValue[laptopid]*160]];$authorID;main]
			$onlyIf[$math[$textInputValue[laptopid]*140]<=$getGlobalUserVar[money;$authorID;main];You don't have enough money to buy that much.]
			$deleteCommand`
	},
];
