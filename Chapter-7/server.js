const net = require("net");

let server = net.createServer(socket => {
    socket.on("data", (data) => {
        socket.write("hello!")
    });

    socket.on("end", () => {
        console.log("disconnected!")
    })

    socket.write("welcome come nodejs-in-depth \n")
})

server.listen("8124", () => {
    console.log("server bound")
})