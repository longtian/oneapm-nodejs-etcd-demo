#!/usr/bin/env bash
sudo docker run -d -p 4002:4002 --name etcd quay.io/coreos/etcd \
  -listen-client-urls http://etcd:4002 -advertise-client-urls http://etcd:4002