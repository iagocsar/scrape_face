//5597837128:AAFkmnjPvj_rQ0cCbWkDjjy6i-F4W5qCq4E

const telegramBot = require('node-telegram-bot-api');

const token = 'TOKENCHAT';

const idChannel = 'CHANELID';

const ID = 'IDCHAT';

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
      const chatId = msg.chat.id;
      const resp = match[1];

      bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
      const chatId = msg.chat.id;

      console.log(msg, chatId);

      bot.sendMessage(chatId, '');
});

module.exports = {
      telegramBot: bot,
};
