const Spawn = require("child_process").spawn;
const { ipcRenderer } = require("electron");

class ChildProcess{
    constructor(...argv) {
        this.process = Spawn("node", argv);
        this.process.on('close', code => {
			let msg;

			this.process.removeAllListeners();
			// JLog.error(msg = `CLOSED WITH CODE ${code}`);
			this.process = null;
            ipcRenderer.send('server-status', getServerStatus());
		});
    }
    kill(sig){
		if(this.process) this.process.kill(sig || 'SIGINT');
	}
}

let webServer;
function startServer(){
	stopServer();
	webServer = new ChildProcess(`${__dirname}/Web/app.js`, 1);
    console.log(getServerStatus());
    ipcRenderer.send('server-status', getServerStatus());
}
function stopServer(){
    if (webServer) webServer.kill();
}
function getServerStatus(){
	if(!webServer) return 0;
	if(webServer.process) return 2;
	return 1;
}

module.exports = {
    startServer,
    stopServer
}