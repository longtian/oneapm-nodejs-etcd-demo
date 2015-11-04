#!/usr/bin/env bash
sudo docker run -d --name=registrator --volume=/var/run/docker.sock:/tmp/docker.sock \
 gliderlabs/registrator:latest -ip 0.0.0.0 etcd://etcd:4002/oneapm