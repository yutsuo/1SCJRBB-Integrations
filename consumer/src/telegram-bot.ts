import TelegramBot from "node-telegram-bot-api";
import { alertEmitter } from "./event.js"

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
        alertEmitter.emit("alertStop");
    });

    //& [/start]
    bot.onText(/\/start/, (msg) => {
        global.chatId = msg.chat.id;
        bot.sendMessage(global.chatId, `🚁 *Welcome to the FIAP 1SCJBB Drone Bot!* 🤖
    
    from now on I will send you alerts from our drones all over the world if their sensors captured extreme measurements 🚨
    
    you can cancel the alerting anytime by sending me the command */stop*`,
            { parse_mode: "Markdown" });

        alertEmitter.emit("alertStart");

    });

};

export const alert = (chatId: any, alertInfo: any) => {
    bot.sendMessage(chatId, alertInfo, { parse_mode: "Markdown" });
};