module.exports=[{
    name:"rifleshop",
    type:"interaction",
    prototype:"button",
    code:`
    $deleteCommand
    $editIn[5s;{newEmbed:{title:hello}}]
    $sendMessage[{newEmbed:{title:Shop Item **===** Rifle}
                           {description:*hunting the animals including ur pets \:)*}
                           {footer:Price 150}}
                {actionRow:{{button:Buy:primary:riflebuy:false:💲}
                            {button:Sell:danger:riflesell:false:📩}}}]`
},{
    name:"rodshop",
    type:"interaction",
    prototype:"button",
    code:`
    $deleteCommand
    $editIn[5s;{newEmbed:{title:hello}}]
    $sendMessage[{newEmbed:{title:Shop Item **===** Fishing Rod}
                           {description:*fishing in german got fisch(ROBLOX REFRENCE HOLY SHI....)*}
                           {footer:Price 150}}
                {actionRow:{{button:Buy:primary:riflebuy:false:💲}
                            {button:Sell:danger:riflesell:false:📩}}}]`
}]