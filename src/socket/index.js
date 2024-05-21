
import io from 'socket.io-client'
var socket = io('http://localhost:4044')
 

socket.on('check_', (data) => {
    console.log(data)
})