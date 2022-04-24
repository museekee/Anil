import * as child from 'child_process';

class ChildProcess{
	process: child.ChildProcess | null;
    constructor() {
        this.process = child.exec(`node ${__dirname}\\Web\\app.js`);
		console.log(`node ${__dirname}/Web/app.js`);
        this.process.on('close', () => {
			this.process!!.removeAllListeners();
			this.process = null;
		});
    }
    kill(){
		if(this.process) this.process.kill('SIGINT');
	}
}

let webServer: ChildProcess;
export function startServer(){
	stopServer();
	webServer = new ChildProcess();
}
export function stopServer(){
    if (webServer) webServer.kill();
}
export function getServerStatus(){
	if(!webServer) return 0;
	if(webServer.process) return 2;
	return 1;
}