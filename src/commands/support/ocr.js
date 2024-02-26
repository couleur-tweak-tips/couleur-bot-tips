const { SlashCommandBuilder } = require('discord.js');
const { createWorker } = require('tesseract.js');
require('dotenv').config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ocr')
        .addAttachmentOption((option) => option
            .setName('image')
            .setDescription('The image to be scanned')
            .setRequired(true))
		.setDescription('Testing an OCR library.'),
	async execute(interaction) {
        await interaction.deferReply();
        const worker = await createWorker('eng');
        const res = await worker.recognize(interaction.options.getAttachment('image').url);
        console.log(res.data.text);
        await interaction.editReply(`${res.data.text}`)
        await worker.terminate();
	},
};