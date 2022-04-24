import { ipcRenderer } from "electron";
import { makeMsg } from "./ShowLog";

ipcRenderer.on('server-status', async (ev, msg) => {
    console.log(msg);
	switch(msg) {
		case 0: changeMark("off"); makeMsg("server-off"); break;
		case 1: changeMark("error"); makeMsg("server-error"); break;
		case 2: changeMark("on"); makeMsg("server-on"); break;
		default: makeMsg(msg); break;
	}
});
function changeMark(markName: string) {
    const Mark = document.getElementsByTagName("asm-mark")[0];
    Mark.setAttribute("class", markName);
}

export = {
    changeMark
}