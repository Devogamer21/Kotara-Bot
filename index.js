const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
const { AoiCanvas, registerFonts } = require('aoi.canvas');
const { configDotenv } = require("dotenv");
require('dotenv').config()



const client = new AoiClient({
  token: process.env.TOKEN,
  prefix: [".", "$getGuildVar[prefix;$guildID;main]"],
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main","eco"],
    securityKey: "8db071893588c9faa201ab1bf4a2bfdf",
  }
});

//bot status
client.status({
    name: "Playing Visual Studio Code",
    type: "PLAYING",
    status: "dnd",
    time: 12,
  });

//canvas setupn
const canvas = new AoiCanvas(client);

registerFonts([{
    src: "./Font"
}]);

//variables
require('./mainvar')(client)
require(`./ecovar`)(client)


//music config
const voice = new AoiVoice(client, {
    searchOptions: {
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});

voice.addPlugin(PluginName.Cacher, new Cacher("memory"));

voice.addPlugin(
    PluginName.Filter,
    new Filter({
        filterFromStart: false,
    }),
);

voice.bindExecutor(client.functionManager.interpreter);

//comamand loader from ./commmands
const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands")