module.exports=[
	{
		name:"inventory",
		aliases:"inv",
		code:`
		$title[Inventory 🎒]
		$description[Please select a category]
		$footer[all items will be displayed]
		$addSelectMenu[1;string;finderinv;Select a category;1;1;false;Crates:Gold Gold Gold:crate:false;Items:A good items for safe your profile:item:false]
		`
	},{
        name: "finderinv",
        type: "interaction", // clarifying that this command is an Interaction
        prototype: "selectMenu",
        code: `
     $deleteCommand
     $interactionReply[{newEmbed:
     {title:Inventory 🎒}
     {description:
     Daily Boxes : $getGlobalUserVar[daily_box;$authorID;eco]
     Normal Boxes : $getGlobalUserVar[normal_box;$authorID;eco]}};everyone;false]
     $onlyIf[$interactionData[values[0]]==crate;]`
    },
    {
        name: "finderinv",
        type: "interaction", // clarifying that this command is an Interaction
        prototype: "selectMenu",
        code: `
        $deleteCommand
$interactionReply[{newEmbed:
     {title:Inventory 🎒}
     {description:
     Rifle : $getGlobalUserVar[daily_box;$authorID;eco]
     Fishing Rod : $getGlobalUserVar[fishing_rod;$authorID;eco]}};everyone;false]
     $onlyIf[$interactionData[values[0]]==item;]`
    }
];