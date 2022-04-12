//GLOBAL STATE MANAGER
import create from "zustand";

const useStore = create((set) => ({
  user: "",
  socket: null,
  room: "",
  setSocket: (socket) => set({ socket: socket }),
  setUser: (user) => set({ user: user }),
  setRoom: (room) => set({ room: room }),
}));

export default useStore;
