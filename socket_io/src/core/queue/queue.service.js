import { dbReadFile, dbWriteFile } from "../../common/service/file.service.js";
import {
  // officersMain,
  // userDisplays,
  io,
} from "../../controller/socket.controller.js";
import {
  officersMain,
  userDisplays,
} from "../../common/socket/socket.service.js";
const dbName = "menu.json";
const dbQueuesName = "queues.json";
const dbQueuesLastDate = "queues_last_date.json";

async function updateQueues() {
  const queuesLastUpdate = await dbReadFile(dbQueuesLastDate);
  const currentDay = new Date().getDay();
  if (queuesLastUpdate?.date !== currentDay) {
    await dbWriteFile(dbQueuesLastDate, { date: currentDay });
    await dbWriteFile(dbQueuesName, []);
  }
}
export async function addQueue(req, res) {
  // console.log("addQueue", req.body);
  const { menuIndex, subMenuIndex } = req.body;
  if (typeof menuIndex == "number" && typeof subMenuIndex == "number") {
    const menu = await dbReadFile(dbName);
    let dbQueues = await dbReadFile(dbQueuesName);
    if (!dbQueues) {
      dbQueues = [];
    }
    dbQueues.push({
      menuIndex,
      subMenuIndex,
      status: "pending",
      timestamp: Date.now(),
    });
    findNextOfficer();
    // await dbWriteFile(dbName, menu);
    await dbWriteFile(dbQueuesName, dbQueues);
    const menuQueues = countMenuQueues(menu, dbQueues);
    res.status(200).send(menuQueues);
  }
}
export async function findNextServiceOrder(menu, menuIndex, subMenuIndex) {
  officersMain.map((officer) => {
    officer.services.map(async (service) => {
      if (service.title === menu[menuIndex].inner_menu[subMenuIndex].uz) {
        // console.log("findNextServiceOrder", service, officer);
        for (const userDisplaySocketId of userDisplays) {
          console.log("next_service_display", {
            symbol: menu[menuIndex].symbol,
            officer_id: officer.officer_id,
            next_number: menu[menuIndex].inner_menu[subMenuIndex].queue.current,
          });

          await io.to(userDisplaySocketId).emit("next_service_display", {
            symbol: menu[menuIndex].symbol,
            officer_id: officer.officer_id,
            next_number: menu[menuIndex].inner_menu[subMenuIndex].queue.current,
          });
          await io.to(officer.socket_id).emit("next_service_officer", {
            symbol: menu[menuIndex].symbol,
            service_title: service.title,
            next_number: menu[menuIndex].inner_menu[subMenuIndex].queue.current,
          });
        }
        menu[menuIndex].inner_menu[subMenuIndex].queue.current += 1;
        await dbWriteFile("menu.json", menu);
      }
    }, {});
  });
}
async function emitNextQueue(officer, menu, menuIndex, subMenuIndex, dbQueues) {
  const message = {
    symbol: menu[menuIndex].symbol,
    menuIndex,
    subMenuIndex,
    officer_id: officer.officer_id,
    next_number: dbQueues.reduce(
      (sum, val) =>
        val.status === "served" &&
        val.menuIndex == menuIndex &&
        val.subMenuIndex == subMenuIndex
          ? sum + 1
          : sum,
      0
    ),
  };

  for (const userDisplaySocketId of userDisplays) {
    await io.to(userDisplaySocketId).emit("next_service_display", message);
  }
  menu = countMenuQueues(menu, dbQueues);
  console.log("emitNextQueue", officer.socket_id);
  await io
    .to(officer.socket_id)
    .emit("next_service_officer", { message, menu });
}
function countMenuQueues(menu, dbQueues) {
  return menu.map((m, mi) => {
    m.inner_menu = m.inner_menu.map((inner_menu, inner_menu_index) => {
      inner_menu.queue = {
        current: dbQueues?.reduce(
          (sum, val) =>
            val.status === "served" &&
            val.menuIndex == mi &&
            val.subMenuIndex == inner_menu_index
              ? sum + 1
              : sum,
          0
        ),
        overall: dbQueues?.reduce(
          (sum, val) =>
            val.menuIndex == mi && val.subMenuIndex == inner_menu_index
              ? sum + 1
              : sum,
          0
        ),
      };
      return inner_menu;
    });
    return m;
  });
}
export async function emitOfficersUpdateMenu() {
  const menuQueues = await getQueue();
  for (const officer of officersMain) {
    await io.to(officer.socket_id).emit("menu_updated", { menu: menuQueues });
  }
}
export async function findNextOfficer() {
  const menu = await dbReadFile(dbName);
  let dbQueues = await dbReadFile(dbQueuesName);
  await emitOfficersUpdateMenu();
  if (!dbQueues) dbQueues = [];
  let foundQueueIndex = -1;
  for (const officerIndex in officersMain) {
    const officer = officersMain[officerIndex];
    if (officer.status === "waiting") {
      for (const service of officer.services) {
        if (foundQueueIndex === -1) {
          foundQueueIndex = dbQueues.findIndex((queue) => {
            const { menuIndex, subMenuIndex, status } = queue;
            if (
              menu[menuIndex].inner_menu[subMenuIndex].uz === service.title &&
              status == "pending"
            ) {
              return true;
            }
          });
          if (foundQueueIndex > -1) {
            officersMain[officerIndex].status = "serving";
            const { menuIndex, subMenuIndex } = dbQueues[foundQueueIndex];
            dbQueues[foundQueueIndex].status = "served";
            await dbWriteFile(dbQueuesName, dbQueues);
            emitNextQueue(officer, menu, menuIndex, subMenuIndex, dbQueues);
          }
        }
      }
    }
  }
}
async function getQueue() {
  await updateQueues();
  const menu = await dbReadFile(dbName);
  const dbQueues = await dbReadFile(dbQueuesName);
  const menuQueues = countMenuQueues(menu, dbQueues);
  return menuQueues;
}
export async function getResponseQueue(req, res) {
  const menuQueues = await getQueue();
  res.status(200).send(menuQueues);
}
