# socket.io-test

1. 客户端测试工具我用的是 [node-repl](https://github.com/maxogden/node-repl)，需要注意的是可能不支持node v0.12.4，我用的是iojs-v2.3.1（用nvm切换非常方便）
2. 如果要测试socket.io-redis，需要本地安装redis
3. 测试平行部署时，`export PORT=3321`切换端口即可（服务端，客户端一样）
