const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
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

require('./mainvar')(client)
require(`./ecovar`)(client)

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

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands")