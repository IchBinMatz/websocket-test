const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
server = app.listen(port, () => {
	console.log(`hosting on port ${port}`)
})

let socket = require('socket.io');

let io = socket(server)

io.sockets.on('connection', onConnection);


function onConnection(socket) {
	console.log("new connection: " + socket.id);
	
	socket.on("mouse", (data) => {
		console.log("id: "+ socket.id + " has touched at: " +data);
		socket.broadcast.emit('mouse', data);
	});

}

