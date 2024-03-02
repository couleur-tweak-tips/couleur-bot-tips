const { Events, ThreadOnlyChannel } = require('discord.js');
require('dotenv').config();
const { createWorker } = require('tesseract.js');
const supportChannels = require('../../support-channels.json');
const supportPatterns = require('../../support-patterns.json');

module.exports = {
	name: Events.ThreadCreate, // https://discord.js.org/docs/packages/discord.js/main/ThreadChannel:Class
	async execute(thread) {
		if (!supportChannels.includes(thread.parentId))
			// if so, it is not a support channel we selected 
			return;

		const lastMessage = await thread.fetchStarterMessage();

		let context = lastMessage.cleanContent

		if (lastMessage.attachments.length > 0) {

			image = lastMessage.attachments.first()
			thread.send("mmh.. okay.. an image.. lemme analyze it :eye::eye:");
			const worker = await createWorker('eng');

			const res = await worker.recognize(image.proxyURL);
			thread.send("done!!");

			context += "\n" + res.data.text
		}

		// thread.send("```\n" + context + "\n```\n")

		supportPatterns.forEach(problem => {
			// thread.send(regex.toString() + ': ' + regex.test(context))
			// thread.send(JSON.stringify(problem))

			const regex = new RegExp(problem.pattern, "gis")
			if (regex.test(context)) thread.send(problem.response);
		})
	},
};