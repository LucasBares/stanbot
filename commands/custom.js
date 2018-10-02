exports.custom = function(client){
    client.on("message", async message => {

        if(command === "test"){
            message.channel.send(`Chinga tu madre`)
        }
        
        const responseObj = {
            "ping": "pong",
            "fortnite": "**fortgay**"
        };
        if (responseObj[message.content]) {
            message.channel.send(responseObj[message.content]);
        };
    });
}