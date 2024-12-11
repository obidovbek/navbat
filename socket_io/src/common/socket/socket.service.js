export const officersMain = [];
export const userDisplays = [];

export function queue_officer_connect(user, socket) {
  const foundOfficerIndex = officersMain.findIndex(
    (officer) => officer.id === user.id
  );
  console.log("queue_officer_connect", foundOfficerIndex, user.id, user.email);
  if (foundOfficerIndex < 0) {
    officersMain.push({
      ...user,
      socket_id: socket.id,
      role: "officer",
      status: "waiting",
    });
  } else {
    officersMain[foundOfficerIndex] = {
      ...officersMain[foundOfficerIndex],
      status: user.status,
      socket_id: socket.id,
    };
  }
  officersMain.map((o) => {
    console.log(o.id, o.status);
  });
}
export function connect_user_display(socket) {
  console.log("connect_user_display");
  userDisplays.push(socket.id);
}
