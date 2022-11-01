#!/bin/sh

echo "[producer] Waiting for 10 seconds...";
sleep 10;
node /app/dist/index.js;