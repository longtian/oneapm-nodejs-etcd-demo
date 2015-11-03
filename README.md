# oneapm-nodejs-etcd-demo

## 准备环境

启动 ETCD

```
docker run -d -p 4001 --name etcd quay.io/coreos/etcd -listen-client-urls http://etcd:4001 -advertise-client-urls http://etcd:4001
```

启动 Registrator

```
sudo docker run -d --name=registrator --volume=/var/run/docker.sock:/tmp/docker.sock gliderlabs/registrator:latest etcd://etcd:4001
```
