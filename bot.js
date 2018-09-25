'use_strict'
//Libraries
const Discord = require("discord.js")
const ms = require("ms")
const mysql = require("mysql")
const ontime = require('ontime')
const request = require('request')
const entities = require('entities')
const validUrl = require('valid-url')
const sm = require('string-similarity');

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
let lastTimestamp = Math.floor(Date.now() / 1000);


const config = require("./config.json");

client.on("ready", () => {
    console.log(`STANBOT iniciado. STANBOT presente en ${client.guilds.size} servidores.`);
    client.user.setUsername(config.username);
    client.user.setActivity(config.onlinemessage, {
        type: "STREAMING"
    });
});
