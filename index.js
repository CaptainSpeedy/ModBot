const config = require("./config.json")

const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({

    sharding: false,

    shardAmount: 1,

    mobile: false,

    token: config.token,

    prefix: config.PREFIX

}); 

bot.status({
    text:"g/ - Read The Faq's",
    type:"PLAYING",
    time:"12"
    });

bot.variables({

suggestion: "value"

});
    

bot.onMessage({

    respondToBots: true

});

bot.loadCommands('./Commands/'); 

