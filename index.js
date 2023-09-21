const TelegramBot = require('node-telegram-bot-api');

const token = '6661284843:AAEef7y2TpJp9apICMXWehI9-0Ml0Lk0kUY';

const webAppUrl = "https://ya.ru";

const bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\/echo (.+)/, (msg, match) => {
    

    const chatId = msg.chat.id;
    const resp = match[1]; 

    bot.sendMessage(chatId, resp);
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === "/start") {
        await bot.sendMessage(chatId, "Ниже появится кнопка, заполните форму", {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Заполнить форму", web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
    if(text === "/start") {
        await bot.sendMessage(chatId, "", {
            reply_markup: {
                keyboard: [
                    [{text: "Заполнить форму", web_app: {url: webAppUrl}}]
                ]
            }
        })
    }

    //bot.sendMessage(chatId, 'Received your message');
});