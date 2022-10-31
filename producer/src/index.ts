import * as dotenv from "dotenv";
import colors from "colors";
import * as amqplib from "amqplib";
import * as drone from "./drone.js";

dotenv.config();
colors.enable();

console.log("[producer]".blue, "Sending Drones inputs...");

(async () => {
  const queue = 'drone-queue';
  const conn = await amqplib.connect('amqp://localhost');

  // Sender
  const producerChannel = await conn.createChannel();

  setInterval(() => {
    producerChannel.sendToQueue(queue, Buffer.from(drone.getInfo()));
  }, 1000);

  process.on("SIGINT"||"SIGTERM", function () {
    producerChannel.close()
      .then(() => console.log("[producer]".blue, "graceful shutdown".red))
      .then(() => process.exit(0));
  });

})();
