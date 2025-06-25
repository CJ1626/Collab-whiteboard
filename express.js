const express = require("express");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Socket.io connections
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  const forwardEvent = (eventName) => {
    socket.on(eventName, (data) => {
      socket.broadcast.emit("on" + eventName, data);
    });
  };

  // List of custom events
  const events = ["size", "color", "toolchange", "hamburger", "mousedown", "mousemove", "undo", "redo"];
  events.forEach(forwardEvent);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
