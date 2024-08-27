// const ws = createWS("ws://localhost:5000");
// const state = createWSState(ws);
// const states = ["Connecting", "Connected", "Disconnecting", "Disconnected"];
// ws.send("it works");
// createEffect(on(ws.message, msg => console.log(msg), { defer: true }));
// return <p>Connection: {states[state()]}</p>;

// const socket = makeHeartbeatWS(
//   makeReconnectingWS(`ws://${location.hostName}/api/ws`, undefined, { timeout: 500 }),
//   { message: "👍" },
// );
// // with the primitives starting with `make...`, one needs to manually clean up:
// socket.send("this will reconnect if connection fails");