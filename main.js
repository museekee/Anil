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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const runner = __importStar(require("./runner"));
const ko_kr_json_1 = __importDefault(require("./Lang/ko-kr.json"));
let win;
function createWindow() {
    return __awaiter(this, void 0, void 0, function* () {
        win = new electron_1.BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });
        const MAIN_MENU = [
            {
                label: ko_kr_json_1.default["menu_server"],
                submenu: [
                    {
                        label: ko_kr_json_1.default["menu-server-on"],
                        accelerator: "Control+O",
                        click: () => {
                            runner.startServer();
                            win.webContents.send('server-status', 2);
                        }
                    },
                    {
                        label: ko_kr_json_1.default["menu-server-off"],
                        accelerator: "Control+P",
                        click: () => {
                            runner.stopServer();
                            win.webContents.send('server-status', 0);
                        }
                    }
                ]
            }
        ];
        const newMenu = electron_1.Menu.buildFromTemplate(MAIN_MENU);
        electron_1.Menu.setApplicationMenu(newMenu);
        win.loadFile("./ASM/index.html");
    });
}
electron_1.app.on('ready', createWindow);
