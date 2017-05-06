2台server，3台client

server1
```
online users : user#78,user#8
```

server2
```
online users : user#44
```

client1
```
> [ping] ===> hi user#8, pong!
hi user#8, pong!

undefined
> cmd.join('haha')
undefined
> [join-room] ===> user#8 joined the room haha
[send-to-room] ===> hi haha, i am user#56.
> [multi-push] ===> hi all, i am user#44.

undefined
> cmd.ta()
undefined
> [multi-push] ===> hi all, i am user#44.
>
```

client2
```
> [ping] ===> hi user#78, pong!
hi user#78, pong!

undefined
> cmd.dump()
undefined
> [multi-push] ===> hi all, i am user#44.
[multi-push] ===> hi all, i am user#8.
[multi-push] ===> hi all, i am user#44.
>
```

client3
```
> [ping] ===> hi user#44, pong!
hi user#44, pong!

undefined
> cmd.ta()
undefined
> [multi-push] ===> hi all, i am user#8.
> cmd.ta()
undefined
>
```

redis
```
➜  ~  redis-cli monitor
OK
1436633864.259072 [0 127.0.0.1:58733] "publish" "socket.io#6ATPCR" "\x92\x83\xa4type\x02\xa4data\x92\xaamulti-push\xb5hi all, i am user#44.\xa3nsp\xa1/\x83\xa6except\x91\xb4f5dyddO7zsR_yMOZAAAA\xa5rooms\x91\xaaroom-allin\xa5flags\x81\xa9broadcast\xc3"
```