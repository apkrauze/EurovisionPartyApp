const users = [];

const addUser = ({ id, room }) => {
  room = room.trim().toLowerCase();

  if (!room) return { error: "Username and room are required." };

  const user = { id, room };

  users.push(user);

  return { user };
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, getUser, getUsersInRoom };
