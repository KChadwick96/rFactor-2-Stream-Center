const SocketIO = require('socket.io');

console.log('Starting socket server');
const io = SocketIO(80);

// events
io.on('connection', socket => {
    console.log('Client connected');
    
    socket.on('updateSessionData', data => {
        socket.broadcast.emit('sessionData', data);
    });
});