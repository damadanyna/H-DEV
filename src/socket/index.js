 
// import store from '@/store'
import io from 'socket.io-client'
var socket = io('http://localhost:4044')

 

socket.on('check_', () => {
    // console.log(data)
})
socket.on('signin', () => {
    // console.log(data)
})
 

