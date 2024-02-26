const { Events } = require('discord.js');
require('dotenv').config();

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`Logged in as ${client.user.tag}`);
	},
};