import { Server } from "socket.io";
import {
  connect_user_display,
  queue_officer_connect,
} from "../common/socket/socket.service.js";
import { findNextOfficer } from "../core/queue/queue.service.js";
// const users = {};

export let io = null;
// const officers = {};

export const initSocket = (server) => {
  io = new Server(server, {
    transports: ["websocket", "polling"],
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("connection");
    // socket.on("disconnect", function () {
    //   io.emit("disconnect_officer", { disconnect: true });
    // });
    socket.on("connect_user_display", () => connect_user_display(socket));
    socket.on("queue_officer", (user) => {
      console.log("queue_officer");
      queue_officer_connect(user, socket);
      findNextOfficer();
    });
    /////////new politex queue system
    // socket.on("set-officer-data", (officer) => {
    //   users[officer.id] = socket.id;
    //   officers[officer.id] = officer;
    //   socket.username = officer.id;
    //   io.emit("users-changed", { user: name, event: "officer joined" });
    // });
    // /////////////////////////////////
    // /////////politex queue system
    // socket.on("set-name-queue", (name) => {
    //   users[name] = socket.id;
    //   socket.username = name;
    //   io.emit("users-changed", { user: name, event: "queue joined 2" });
    // });
    // socket.on("queue_next", (data) => {
    //   io.emit("queue_next_user", { data: data });
    // });
    // socket.on("queue_new_user", (data) => {
    //   io.emit("queue_send_officer", { data: data });
    // });

    // /////////////////////////////////

    // socket.on("set-name", (name) => {
    //   users[name] = socket.id;
    //   socket.username = name;
    //   io.emit("users-changed", { user: name, event: "joined" });
    // });

    // socket.on("send-message", (message) => {
    //   if (message.send_to) {
    //     io.to(users[message.send_to]).emit("message", {
    //       msg: message.text,
    //       user: message.sender_token,
    //       createdAt: new Date(),
    //     });
    //   } else {
    //     io.emit("message", {
    //       msg: message.text,
    //       user: socket.username,
    //       createdAt: new Date(),
    //     });
    //   }
    // });
    // socket.on("new-messager", (new_messager) => {
    //   let message_to = {};
    //   for (key in new_messager) {
    //     if (key !== "send_to") message_to[key] = new_messager[key];
    //   }
    //   io.to(users[new_messager.send_to]).emit("messager", { message_to });
    // });
    // socket.on("change_order", (message) => {
    //   let message_to = {};
    //   for (key in message) {
    //     if (key !== "send_to") message_to[key] = message[key];
    //   }
    //   // delete message_to['send_to'];
    //   io.to(users[message.send_to]).emit("order", { message_to });
    // });
  });
};
