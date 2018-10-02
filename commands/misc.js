exports.misc = function(client){
    const config = require("../config.json");
    const imgs = require("../structures/images.json")
    const ms = require("ms")
    client.on("message", async message =>{
        if (message.author.bot) return;
        if (message.content.indexOf(config.prefix) !== 0) return;
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (command === "seppuku") {
            let member = message.author.id;
            let muted = message.guild.roles.find("name", "Muted");
            let time = `1m`;
            message.member.addRole(muted).catch(console.error);
            const sadcat = client.emojis.find("name", "sadcat");
            let seppuku = imgs.seppuku;
            let randomImg = Math.floor(Math.random()*imgs.seppuku.length);
            let img = seppuku[randomImg];

            message.channel.send({
                embed: {
                    color: 3447003,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    //description: `<@${message.author.id}> you've been muted for ${ms(ms(time), {long: true})}`
            description: `<@${message.author.id}> se suicimató ${sadcat}`,
            image: {
                url: img
            }
                }
            }).then(message => {
                message.delete(60000)
            });
            setTimeout(() => {
                if (!message.member.roles.some(r =>["Muted"].includes(r.name)))
                    return;
                message.member.removeRole(muted);
                message.channel.send({
                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        description: `<@${message.author.id}> ya eres libre, chamaco meco -.-`
                    }
                }).then(message => {
                    message.delete(60000)
                });
            }, ms(time));
        }
    });
}