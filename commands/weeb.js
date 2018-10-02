exports.weeb = function(client){

    const config = require("../config.json");
    const nclient = require("nekos.life")
    const neko = new nclient();
    client.on("message", async message => {
        if (message.author.bot) return;
        if (message.content.indexOf(config.prefix) !== 0) return;
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
            if(command === "owo"){
                const msg = args.join(" ");
                async function owoify() {
                    let owo = await neko.getSFWOwOify({text: `${msg}`});
                    console.log(owo);
                    message.channel.send(owo.owo || owo.msg || `wats dis?`)
                    message.channel.send({
                    embed: {
                        color: 3447003,
                        author: {
                            name: message.author.username,
                            icon_url: message.author.avatarURL
                        },
                        description: owo.owo
                    }
                    }).then(message => {
                    message.delete(60000)
                    });
                }   
                owoify();
            }
    });
}