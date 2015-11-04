#!/usr/bin/env bash
sudo docker run -P --expose=80 -d -v `dirname \`pwd\``:/app:ro \
 -e SERVICE_NAME=timeservers node node /app/time.js