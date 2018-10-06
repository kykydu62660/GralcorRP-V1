const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready !");
});

bot.login('NDk4MTI0MTc0ODQyMjY1NjEz.DppOjw.u5QmQNmt-Ph1b5w9zfR_TuuSwtQ');

bot.on('message', message => {
    if (message.content === "!workshop"){
        message.reply("Voici les Workshop https://steamcommunity.com/sharedfiles/filedetails/?id=1463065016 et https://steamcommunity.com/sharedfiles/filedetails/?id=1513514863");

    }

    if (message.content === "!fofo"){
        message.reply("Voici le Forum https://gralcor-roleplay.mtxserv.fr/forum/index.php");
        
    }

});