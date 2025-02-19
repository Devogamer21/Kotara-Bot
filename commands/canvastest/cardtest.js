module.exports={
    name:"card",
    code:`
$attachCanvas[profile]
$drawImage[profile;$nonEscape[$authorAvatar];90;185;380;380]
$fillText[profile;test; 30px Minecraft;#ffffff;500;700]
$drawImage[profile;$attachment[./img/card.png;card.png];0;0;1748;1240]
$createCanvas[profile;1748;1240]`
}