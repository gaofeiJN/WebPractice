//
let name;

// 在worker中添加BroadcastChannel
let broadcast = new BroadcastChannel("broadcast");
broadcast.onmessage = function (event) {
    console.log(`receive message in ${name}: ${event.data}`);
}

//
self.onmessage = function (event) {
    if (event.data.includes("name:")) {
        name = event.data.replace("name:", "");
    } else {
        broadcast.postMessage(`${event.data} ${name}`);
    }
}
