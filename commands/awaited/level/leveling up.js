module.exports = {
    name: "$alwaysExecute",
    code: `
    $if[$getGlobalUser Var[xp;$authorID;eco]==$math[50*$getGlobalUserVar[level;$authorID;eco]/5]]
        you leveled up
        $setGlobalUser Var[level;$sum[$getGlobalUserVar[level;$authorID;eco];1];$authorID;eco]
        $setGlobalUser Var[xp;$sub[$getGlobalUserVar[xp;$authorID;eco];$math[50*$getGlobalUserVar[level;$authorID;eco]/5]];$authorID;eco]
    $endif
    `
}