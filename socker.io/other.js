var emitter = require('socket.io-emitter')({ host: '127.0.0.1', port: 6379 });
setInterval(function(){
  // emitter.to('room-allin').broadcast.emit('multi-push', new Date);
  // emitter.emit('multi-push', new Date);
  emitter.emit('test', new Date);
}, 5000);