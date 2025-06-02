module.exports = {
name: "work", 
code: `$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;eco];$get[wmoney]];$authorID;eco]
$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp;$authorID;eco];$random[5;10]];$authorID;eco]
$thumbnail[$userAvatar[$authorID]]
$color[Random]
$title[Work]
$description[
$username, $randomText[it looks like you'd do anything for money 😳.;you were employed as a construction worker today!;you're a discord workaholic!;nice music dude! Here, you earned it!;you were employed as a hair stylist today;hacking can make you a good deal of money if you know what you're doing! From your last hack job, you made;your bitcoin miner scraped up some cash for you!;were you not satisfied with your past employers? Well I counted the tips from your pole dancing gig and you didn't do too bad 😳]
]
$footer[💵 +$$get[wmoney] | XP +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]
$let[wmoney;$random[100;550]]
`
}