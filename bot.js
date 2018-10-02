'use_strict'
const Discord = require("discord.js")

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

const config = require("./config.json");

client.on("ready", () => {
    console.log(`STANBOT iniciado. STANBOT presente en ${client.guilds.size} servidores.`);
    client.user.setUsername(config.username);
    client.user.setActivity(config.onlinemessage, {
        type: "STREAMING"
    });
});

const help = require(`./commands/help.js`);
help.help(client);
const misc = require(`./commands/misc.js`);
misc.misc(client);
const weeb = require(`./commands/weeb.js`);
weeb.weeb(client);
const birb = require(`./commands/birb.js`);
birb.birb(client);
const utils = require(`./utils/utils.js`)
utils.utils(client);
const custom = require(`./commands/custom.js`)
custom.custom(client)

/* 
Why do u keep this if you don't use it , lul
const entities = require('entities')
const validUrl = require('valid-url')
const sm = require('string-similarity');
const ms = require("ms")
const mysql = require("mysql")
const ontime = require('ontime')
let lastTimestamp = Math.floor(Date.now() / 1000);
*/
