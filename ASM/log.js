"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const electron_1 = require("electron");
const ShowLog_1 = require("./ShowLog");
electron_1.ipcRenderer.on('server-status', (ev, msg) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(msg);
    switch (msg) {
        case 0:
            changeMark("off");
            (0, ShowLog_1.makeMsg)("server-off");
            break;
        case 1:
            changeMark("error");
            (0, ShowLog_1.makeMsg)("server-error");
            break;
        case 2:
            changeMark("on");
            (0, ShowLog_1.makeMsg)("server-on");
            break;
        default:
            (0, ShowLog_1.makeMsg)(msg);
            break;
    }
}));
function changeMark(markName) {
    const Mark = document.getElementsByTagName("asm-mark")[0];
    Mark.setAttribute("class", markName);
}
module.exports = {
    changeMark
};
