const { CommandoClient, Command } = require('discord.js-commando');
const { Collection } = require('discord.js');

module.exports = class MisakiClient extends CommandoClient{
    constructor(options) {
        super(options);

        this.debug = false
        this.lastChannel = new Collection()
        
    }
}