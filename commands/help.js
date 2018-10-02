exports.help = function(client){

    const config = require("../config.json");
    client.on("message", async message => {
        if (message.author.bot) return;
        if (message.content.indexOf(config.prefix) !== 0) return;
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if(command === "help"){
            message.channel.send({
                embed: {
                    color: Math.floor(Math.random() * (0xFFFFFF + 1)),
                    description: "SoonTM"
                }
            }).then(message => {
                message.delete(60000)
            });
        }
    });
}