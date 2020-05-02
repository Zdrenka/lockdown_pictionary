var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

io.on('connection', socket => {
  console.log(`A user connected with socket id ${socket.id}`)
  socket.on('start', function() {
    console.log("timer event hit")
    socket.broadcast.emit('timerSet', socket.id)
  })
})

http.listen(8083, () => {
  console.log('Listening on *:8083')
})