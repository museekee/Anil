const { ipcRenderer } = require("electron");
ipcRenderer.on('server-status', (ev, code) => {
    console.log(code)
	switch(code){
		case 0: changeMark("off"); break;
		case 1: changeMark("error"); break;
		case 2: changeMark("on"); break;
	}
});
function changeMark(markName) {
    const Mark = document.getElementsByTagName("asm-mark");
    Mark.setAttribute("class", markName);
}
module.exports = {
    changeMark
}