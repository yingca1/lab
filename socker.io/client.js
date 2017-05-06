var io = require('socket.io-client');
var _ = require('lodash');
var userId = randomUserId();
socket = io.connect('http://127.0.0.1:' + (process.env.PORT || 3210), {query: 'user_id=' + userId});

socket.emit('ping');

var eventNames = ['ping', 'single-push', 'multi-push', 'send-to-room', 'join-room', 'leave-room', 'test'];

_.forEach(eventNames, function(eventName) {
	socket.on(eventName, function(result) {
		console.log('[' + eventName + '] ===> ' + result);
	});
});

socket.on('ping', function(result) {
	console.log(result);
});

function randomUserId() {
	return 'user#' + Math.floor((Math.random() * 100) + 1);
}

var cmd = (function(socket) {
	function toAll() {
		socket.emit('allin', 'hi all, i am ' + userId + '.');
	}

	function toRoom(roomId) {
		socket.emit('send-to-room', roomId, 'hi ' + roomId + ', i am ' + userId + '.');
	}

	function joinRoom(roomId) {
		socket.emit('join-room', roomId);
	}

	function leaveRoom(roomId) {
		socket.emit('leave-room', roomId);
	}

	function dumpRooms() {
		socket.emit('dump-rooms');
	}
	return {
		ta: toAll,
		tr: toRoom,
		join: joinRoom,
		leave: leaveRoom,
		dump: dumpRooms
	}
})(socket);