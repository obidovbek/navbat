import { Router } from "express";
import { addQueue, getResponseQueue } from "./queue.service.js";
const queueRouter = Router();

queueRouter.post("/", addQueue);
queueRouter.get("/", getResponseQueue);

export default queueRouter;
