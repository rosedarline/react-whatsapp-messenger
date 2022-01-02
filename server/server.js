const PORT = process.env.PORT || 80;
const io = require('socket.io')(PORT);

io.on('connection', socket => {
    const id = socket.handshake.query.id
    socket.join(id)
    console.log(`Connected to port ${PORT}.`);
    socket.on('send-message', ({ recipients, text }) => {
        console.log('send-message', text);
        recipients.forEach(recipient => {
            const newRecipients = recipients.filter(r => r !== recipient)
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients, sender: id, text
            })
        })
    })
})