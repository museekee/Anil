"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerStatus = exports.stopServer = exports.startServer = void 0;
const child = __importStar(require("child_process"));
class ChildProcess {
    constructor() {
        this.process = child.exec(`node ${__dirname}\\Web\\app.js`);
        console.log(`node ${__dirname}/Web/app.js`);
        this.process.on('close', () => {
            this.process.removeAllListeners();
            this.process = null;
        });
    }
    kill() {
        if (this.process)
            this.process.kill('SIGINT');
    }
}
let webServer;
function startServer() {
    stopServer();
    webServer = new ChildProcess();
}
exports.startServer = startServer;
function stopServer() {
    if (webServer)
        webServer.kill();
}
exports.stopServer = stopServer;
function getServerStatus() {
    if (!webServer)
        return 0;
    if (webServer.process)
        return 2;
    return 1;
}
exports.getServerStatus = getServerStatus;
