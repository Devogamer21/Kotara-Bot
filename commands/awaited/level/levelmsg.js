module.exports={
    name:"$alwaysExecute",
    code:`
  $setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp;$authorID;eco];1];$authorID;eco]`
}