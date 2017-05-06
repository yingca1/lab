var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require("socket.io").listen(server);
var _ = require('lodash');
var redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379 }));

var onlineUsers = [];

io.on('connection', function(socket) {
	var userId = socket.handshake.query.user_id;
	notifyOnline(userId);

	socket.join(userId);
	socket.on(userId, function(result) {
		socket.emit('single-push', result);
	})

	socket.join('room-allin')
	socket.on('allin', function(result) {
		// 除了自己
		socket.broadcast.to('room-allin').emit('multi-push', result);
		// 包括自己
		// io.to('room-allin').emit('multi-push', result);
	})

	socket.on('send-to-room', function(roomId, result) {
		// 一样的效果，不包含自己
		//socket.broadcast.to(roomId).emit('send-to-room', result);
		io.to(roomId).emit('send-to-room', result);
	});

	socket.on('join-room', function(roomId) {
		socket.join(roomId);
		socket.emit('join-room', userId + ' joined the room ' + roomId);
	});

	socket.on('leave-room', function(roomId) {
		socket.leave(roomId);
		socket.emit('leave-room', userId + ' left the room ' + roomId);
	});

	socket.on('dump-rooms', function() {
		console.log(io.nsps['/'].adapter.rooms);
	});

	socket.on('ping', function() {
		socket.emit('ping', 'hi ' + userId + ', pong!');
	});

	socket.on('disconnect', function() {
		notifyOffline(userId);
	});
});

server.listen(process.env.PORT || 3210);

function notifyOnline(user_id) {
	onlineUsers.push(user_id);
	console.log(user_id + ' is online.');
	echoOnlineUser();
}

function notifyOffline(user_id) {
	onlineUsers.splice(_.indexOf(onlineUsers, user_id), 1);
	console.log(user_id + ' is offline.');
	echoOnlineUser();
}

function echoOnlineUser() {
	console.log('online users : ' + onlineUsers);
}