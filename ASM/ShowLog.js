"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMsg = void 0;
function makeMsg(text) {
    var date = new Date();
    var o = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
    const msgs = document.getElementById("msgs");
    const msg = document.createElement("div");
    msg.setAttribute("class", "msg");
    msg.innerText = `[${o.year}-${o.month}-${o.date} ${o.hour}:${o.minute}:${o.second}] ${text}`;
    msgs.appendChild(msg);
}
exports.makeMsg = makeMsg;
