import * as dotenv from "dotenv";
import colors from "colors";
import * as amqplib from "amqplib";
import { botter, alert } from "./telegram-bot.js"

dotenv.config();
colors.enable();

global.alerts = true;

console.log("[consumer]".green, "Receiving Drones inputs...");

const willAlert = (drone: any) => {
  if (
    drone.sensors.temperature >= 35 &&
    drone.sensors.temperature <= 0 ||
    drone.sensors.humidity <= 15
  ) {
    return true;
  }
  return false;
};

botter();

(async () => {
  const queue = "drone-queue";
  const conn = await amqplib.connect("amqp://localhost");

  const consumerChannel = await conn.createChannel();
  await consumerChannel.assertQueue(queue, { durable: false });

  global.alertList = [];

  // Listener
  consumerChannel.consume(queue, (msg) => {
    if (msg !== null) {
      console.log("[consumer]".green, "Received:".cyan, msg.content.toString());
      consumerChannel.ack(msg);

      let alertFlag = willAlert(JSON.parse(msg.content.toString()));

      if (alertFlag) {
        global.alertList.push(`
🤖 ${JSON.parse(msg.content.toString()).id} 
🌡️ ${JSON.parse(msg.content.toString()).sensors.temperature}⁰C 
☔ ${JSON.parse(msg.content.toString()).sensors.humidity}%`
        );
      };

      const alertTitle = `🚨 *ALERT* 🚨
🚁 These drones found dangerous conditions! 😱`;
      const alertBody = global.alertList.join("\n");
      const alertText = alertTitle + "\n" + alertBody;

      console.log("willAlert()".yellow, alertFlag);


      if (alertFlag) {
        alert(global.chatId, alertText);
      }



    } else {
      console.log("[consumer]".green, "Consumer cancelled by server".red);
    }
  });

  process.on("SIGINT", function () {
    consumerChannel.close()
      .then(() => console.log("[consumer]".green, "graceful shutdown".red))
      .then(() => process.exit(0));
  });

})();
