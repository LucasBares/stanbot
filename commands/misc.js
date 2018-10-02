exports.misc = function(client){
    const config = require("../config.json");
    const imgs = require("../structures/images.json")
    const ms = require("ms")
    const dead = new Set();
    client.on("message", async message =>{
        if (message.author.bot) return;
        if (message.content.indexOf(config.prefix) !== 0) return;
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (command === "seppuku") {
            if (dead.has(message.author.id))
                return;
            let muted = message.guild.roles.find("name", "Muted");
            let time = `10m`;
            message.member.addRole(muted).catch(console.error);
            const sadcat = client.emojis.find("name", "sadcat");
            let seppuku = imgs.seppuku;
            let randomImg = Math.floor(Math.random()*imgs.seppuku.length);
            let img = seppuku[randomImg];
            message.delete(120000) //Si vas a borrar, que borre todo :lul:
            message.channel.send({
                embed: {
                    color: 3447003,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    description: `<@${message.author.id}> se suicimató ${sadcat}`,
                    image: {
                    url: img
                    }
                }
            }).then(message => {
                message.delete(120000)
            });
            setTimeout(() => {
                if (!message.member.roles.some(r =>["Muted"].includes(r.name)))
                    return;
                else{
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
            }}, ms(time));
            dead.add(message.author.id);
        }
    setTimeout(() => {
        dead.delete(message.author.id);
    }, ms(`10m`));
    });
}