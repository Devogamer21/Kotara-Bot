module.exports={
	name:"drip",
	code:`
	$title[You Drippin]
	$image[https://api.popcat.xyz/drip?image=$replaceText[$replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;png];jpg;png];gif;png]]`
}