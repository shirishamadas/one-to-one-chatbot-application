const {Server} = require('socket.io');

const PORT = 9000;

const io = new Server(PORT, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = [];

const addUser = (userId, socketId) => {
    console.log(users, userId, 'addUser')
    !users.some(user => user.userId === userId) && users.push({ userId, socketId })
}

const getUser = (userId) => {
    console.log(users, userId, 'userId')
    return users.find(user => user.userId === userId);
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId)
}

io.on('connection', (socket) => {
    console.log('user connected');

    //connect
    socket.on('addUser', userId => {
        addUser(userId,socket.id)
        console.log(users)
        io.emit('getUsers',users);
    })  

    //send messages
    socket.on('sendMessages', ({senderId, receiverId, text}) => {
        const user = getUser(receiverId)
        io.to(user.socketId).emit('getMessage',{
            senderId, text
        })
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log("User Disconnected");
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
}) 