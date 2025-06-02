module.exports = {
  name: "balance",
  aliases: ["bal"],
  code: `
	$title[$username[$mentioned[1]]'s Balance]
	$description[
Money:
- \`$getGlobalUserVar[money;$mentioned[1;true];eco]$\`
Bank
- \`$getGlobalUserVar[bank;$mentioned[1;true];eco]$\`
Shards
- \`$getGlobalUserVar[shards;$mentioned[1;true];eco]⏣\`
XP
- \`$getGlobalUserVar[xp;$mentioned[1;true];eco]/450xp\`]
	$color[Yellow]`,
};