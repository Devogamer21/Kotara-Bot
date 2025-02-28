module.exports=[
	{
		name:"inventory",
		aliases:"inv",
		code:`
		$title[Inventory 🎒]
		$description[Please select a category]
		$footer[all items will be displayed]
		$addSelectMenu[1;string;finder;Select a category;1;1;false;Crates:Gold Gold Gold:crate:false;A good items for safe your profile:items:false]
		`
	},{
        name: "finder",
        type: "interaction", // clarifying that this command is an Interaction
        prototype: "selectMenu",
        code: `
     $interactionReply[crate;everyone;false]
     $onlyIf[$interactionData[values[0]]==crates;]`
    },
    {
        name: "finder",
        type: "interaction", // clarifying that this command is an Interaction
        prototype: "selectMenu",
        code: `
     $interactionReply[item;everyone;false]
     $onlyIf[$interactionData[values[0]]==items;]`
    }
];