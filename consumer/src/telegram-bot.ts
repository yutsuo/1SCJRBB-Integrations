import TelegramBot from "node-telegram-bot-api";

const TOKEN = "5765209441:AAHdJXX8VwjH57U6Xiu7O3H2A8fqtzoNujY";

const bot = new TelegramBot(TOKEN, {
    polling: true,
    onlyFirstMatch: true,
});

export const botter = async () => {

    //& [/stop]
    bot.onText(/\/stop/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, "🛑 Stopping alerts...");
        global.alerts = true;
    });

    //& [/start]
    bot.onText(/\/start/, (msg) => {
        global.chatId = msg.chat.id;
        bot.sendMessage(global.chatId, `🚁 *Welcome to the FIAP 1SCJBB Drone Bot!* 🤖
    
    from now on I will send you alerts from our drones all over the world if their sensors captured extreme measurements 🚨
    
    you can cancel the alerting anytime by sending me the command */stop*`,
            { parse_mode: "Markdown" });

        global.alerts = false;

    });

    //& [/test]
    bot.onText(/\/test/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, "message received");
        console.log("global.alertList =>".bgCyan, global.alertList);
        const alertTitle = `🚨 *ALERT* 🚨
🚁 These drones found dangerous conditions! 😱`;
        const alertBody = global.alertList.join("\n");
        const alertText = alertTitle + "\n" + alertBody;
        bot.sendMessage(chatId, alertText, { parse_mode: "Markdown" });
        // global.alertList = [];
    });
};

export const alert = async (chatId: any, alertInfo: any) => {

    if (!global.alerts && global.alertList.length > 0) {
        bot.sendMessage(chatId, alertInfo, { parse_mode: "Markdown" })
        global.alertList.length = 0;

        // bot.sendMessage(chatId, alertInfo, { parse_mode: "Markdown" });
    }
};