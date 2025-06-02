const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
const { AoiCanvas, registerFonts } = require('aoi.canvas');
const { configDotenv } = require("dotenv");
require('dotenv').config()
const { EnkaClient } = require("enka-network-api");

const client = new AoiClient({
  token: process.env.TOKENTEST,
  prefix: [".", "$getGuildVar[prefix;$guildID;main]"],
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@aoijs/aoi.db"),
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


//variables
require('./mainvar')(client)
require('./ecovar')(client)


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

// Change the directory to store cache data.
// Default directory is node_modules/enka-network-api/cache.
const enka = new EnkaClient();
enka.cachedAssetsManager.cacheDirectoryPath = "./cache";
enka.cachedAssetsManager.cacheDirectorySetup();