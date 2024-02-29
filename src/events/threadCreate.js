const { Events } = require('discord.js');
require('dotenv').config();
const supportChannels = require('../../support-channels.json');

module.exports = {
	name: Events.ThreadCreate,
	async execute(thread) {
		if(!supportChannels.includes(thread.parentId)) return; // Checks if the channel ID of the thread is in your JSON list
        
        /* Your code here...

        'thread' is a discord ThreadChannel, you can see all the properties and methods here:
        https://discord.js.org/docs/packages/discord.js/14.14.1/ThreadChannel:Class

        For example, thread.send("hello :D");

        Most of the docs are well written but let me know if you have questions :) */

	},
};