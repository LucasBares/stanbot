exports.birb = function(client){
    const request = require('request')
    
    client.on("message", async message => {
        if (message.author.bot) return;

        if (message.content.indexOf(config.prefix) !== 0) return;
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if(command === "birb"){
            async function birb(){
                let birbApi = await `https://random.birb.pw/tweet.json/`;
                request({url: birbApi, json: true,}, 
                    (error, response, body) => {
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
}