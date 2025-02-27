module.exports = {
  name: "balance",
  aliases: ["bal"],
  code: `
	$title[$username[$mentioned[1]]'s Balance]
	$description[
Money:
- \`$getGlobalUserVar[money;$mentioned[1];eco]$\`
Bank
- \`$getGlobalUserVar[bank;$mentioned[1];eco]$\`
Shards
- \`$getGlobalUserVar[shards;$mentioned[1];eco]⏣\`
XP
- \`$getGlobalUserVar[xp;$mentioned[1];eco]/450xp\`]
	$color[Yellow]`,
};