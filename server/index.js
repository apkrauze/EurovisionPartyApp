require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const { addUser } = require("./users");

//HERE IS DATABASE CONNECTION
connection();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("join_room", ({ room }, callback) => {
    const { error, user } = addUser({ id: socket.id, room });

    if (error) return callback(error);

    socket.join(user.room);
  });
});

const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`Listening on port ${port}...`));

// socket.on("join_room", (data) => {
//   socket.join(data.room);
//   console.log(`User with ID: ${data.user} joined room: ${data.room}`);
// });
