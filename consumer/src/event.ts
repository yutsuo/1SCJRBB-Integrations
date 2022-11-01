import { EventEmitter } from "events";
import { alert } from "./telegram-bot.js";

export const alertEmitter = new EventEmitter();

alertEmitter.on("alertStart", () => {

    global.intervalAlert = setInterval(() => {
        if (global.alertList.length > 0) {
            const alertTitle = `🚨 *ALERT* 🚨
        🚁 These drones found dangerous conditions! 😱`;
            const alertBody = global.alertList.join("\n");
            const alertText = alertTitle + "\n" + alertBody;

            alert(global.chatId, alertText);

            global.alertList.length = 0;
        }
    }, 60000);
});

alertEmitter.on("alertStop", () => {
    clearInterval(global.intervalAlert);
});