module.exports=[{
    name:"shop",
    aliases:["buy","sp","sell"],
    code:`
    $title[Kura's Shop System]
    $description[Welcome to the shop!, the shop will have a buy sell system and it can buy and sell using MAX input or any input]
    $image[https://media.discordapp.net/attachments/1070262972527673356/1363747638314401963/5mxneybxa0bc1.jpeg?ex=68072876&is=6805d6f6&hm=cd52373f2beae98eba9b520291c04aed53a61a5c88114ca5e2bf564fbb721eda&=&format=webp&width=456&height=535]
    $footer[the devs are so lazy ]
    $addSelectMenu[1;string;shopcategory;Select a category;1;1;false;Crates:Gold Gold Gold:crateshop:false;Items:A good items for safe your profile:itemshop:false]`
    $editIn[5s;Expired]
},{
    name: "shopcategory",
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
 $deleteCommand
 $sendMessage[{newEmbed:{title:Shopping 🛒}{description:

 Normal Box : more cheaper

 Crazy Box : more expensive but with better rewards

 Expensive Box : better chances of winning big prizes

 }}{actionRow:{button:Normal Box:primary:nboxshop:false:📦}{button:Crazy Box:primary:cboxshop:false:📦}{button:Expensive box:primary:exboxshop:false:📦}};false]
 $onlyIf[$interactionData[values[0]]==crateshop;]
`
},
{
    name: "shopcategory",
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
 $deleteCommand
 $sendMessage[{newEmbed:
 {title:Shopping 🛒}
 {description:
 Items Available :

 Rifle : the americans love this minigame recomended
 
 Fishing Rod : a mini maybe you knew called fishing

 laptop : *laptop*
 
 Pizza : i like pizza
 
 }}{actionRow:{button:Fishing rod:primary:rodshop:false:🎣}{button:Rifle:primary:rifleshop:false:🔫}};false]
$onlyIf[$interactionData[values[0]]==itemshop;]
`
}]