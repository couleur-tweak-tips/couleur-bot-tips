const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!'),
	async execute(interaction) {
		await interaction.channel.send('Pinging...').then(async reply => {
			reply.delete();
			await interaction.reply(`:ping_pong: Measured latency at \`${reply.createdTimestamp - interaction.createdTimestamp}ms\`.\n:desktop: Measured API latency at \`${Math.round(reply.client.ws.ping)}ms\`.`)
		});
	},
};