import express from "express";
import http from "http";
import { dbReadFile } from "./common/service/file.service.js";
import queueRouter from "./core/queue/queue.controller.js";
import userRouter from "./core/user/user.controller.js";
import cors from "cors";
import { initSocket } from "./controller/socket.controller.js";
import { connectToDb } from "./common/service/database.service.js";

const app = express();
const server = http.createServer(app);

app.use(express.static("public"));
function initRoutes() {
  app.use("/queue", queueRouter);
  app.use("/user", userRouter);
}
(async function () {
  initSocket(server);
  const menu = await dbReadFile("menu.json");
  //   console.log(menu.map((item) => item.inner_menu.map((iq) => iq.queue)));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  initRoutes();
  await connectToDb();
  const PORT = 3001;
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})();
