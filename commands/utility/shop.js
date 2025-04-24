const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('av-shop')
        .setDescription('[Aetherveil] Displays a list of items at the general store.'),
    async execute(interaction){
        await interaction.reply('List of items');
    },
};