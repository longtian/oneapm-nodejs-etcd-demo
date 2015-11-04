#!/usr/bin/env bash
sudo docker run -P -d -e SERVICE_NAME=redis -e SERVICE_ID=master redis