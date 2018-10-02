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

const help = require(`./commands/help.js`);
help.help(client);
const weeb = require(`./commands/weeb.js`);
weeb.weeb(client);

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.author.id == "355547333288787969"){
	    message.react("💩");
    }
    const responseObj = {
        "ping": "pong",
        "fortnite": "**fortgay**"
    };
    if (responseObj[message.content]) {
        message.channel.send(responseObj[message.content]);
    };

    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "test"){
        message.channel.send(`Chinga tu madre`)
    }
    if(command === "birb"){
        async function birb(){
            let birbApi = await `https://random.birb.pw/tweet.json/`;
            request({
                url: birbApi,
                json: true,
            }, (error, response, body) => {
                if (!error && response.statusCode === 200){
                    const embed = new Discord.RichEmbed();
                        embed.setColor(Math.floor(Math.random() * (0xFFFFFF + 1)) || '#007cbf');
                        embed.setImage(`https://random.birb.pw/img/${body.file}`);
                    message.channel.send(embed);
                }else{
                    console.log(`OOPS, something went wrong`)
                }
            });
        }
        birb();
    }
});
