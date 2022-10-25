import * as dotenv from "dotenv";
import schedule from "node-schedule";
import colors from "colors";
import CONFIG from "./config/config.js";
// import { DateTime } from "luxon";
// import * as amqp from "amqplib/callback_api.js";
import * as amqplib from "amqplib";

dotenv.config();
colors.enable();

console.log("[consumer]".green, "Starting consumer...");

(async () => {
  const queue = 'my-queue';
  const conn = await amqplib.connect('amqp://localhost');

  const ch1 = await conn.createChannel();
  await ch1.assertQueue(queue, { durable: false });

  // Listener
  ch1.consume(queue, (msg) => {
    if (msg !== null) {
      console.log('Recieved:', msg.content.toString());
      ch1.ack(msg);
    } else {
      console.log('Consumer cancelled by server');
    }
  });

  // Sender
  // const ch2 = await conn.createChannel();

  // setInterval(() => {
  //   ch2.sendToQueue(queue, Buffer.from('something to do'));
  // }, 1000);

  process.on("SIGINT", function () {
    schedule
      .gracefulShutdown()
      .then(() => console.log("[server] graceful shutdown".red))
      .then(() => process.exit(0));
  });

  process.on('exit', code => {
    console.log(`Closing elegantly...`);
    ch1.close();

  });
})();

// const url = 'amqp://localhost';
// const queue = 'my-queue';

// let channel: amqp.Channel;

// amqp.connect(url, function (err, conn) {
//   if (!conn) {
//     throw new Error(`AMQP connection not available on ${url}`);
//   }
//   conn.createChannel(function (err, ch) {
//     channel = ch;
//     channel.assertQueue(queue, { durable: false });
//     channel.consume(queue, function (msg) {
//       console.log('Received message: ', msg!.content.toString());
//     });
//   });

// });

// process.on('exit', code => {
//   console.log(`Closing elegantly...`);
//   channel.close(() => { });

// });

// async function main(cronExpression: string, cronDescription: string) {
//   const job: schedule.Job = schedule.scheduleJob(
//     cronExpression,
//     async function () {}
//   );
// }

// main(CONFIG.CRONTAB.EVERY_MINUTE.EXP, CONFIG.CRONTAB.EVERY_MINUTE.DESCRIPTION);
