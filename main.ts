import { app, BrowserWindow, Menu, ipcRenderer } from "electron";
import * as runner from "./runner";
import LANG from "./Lang/ko-kr.json";

let win: BrowserWindow;
async function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation : false
        }
    });
    const MAIN_MENU = [
      {
        label: LANG["menu_server"],
        submenu: [
            {
                label: LANG["menu-server-on"],
                accelerator: "Control+O",
                click: () => {
                    runner.startServer();
                    win.webContents.send('server-status', 2);
                }
            },
            {
                label: LANG["menu-server-off"],
                accelerator: "Control+P",
                click: () => {
                    runner.stopServer();
                    win.webContents.send('server-status', 0);
                }
            }
        ]
      }
    ];
    const newMenu = Menu.buildFromTemplate(MAIN_MENU);
    Menu.setApplicationMenu(newMenu);

    win.loadFile("./ASM/index.html");
}
app.on('ready', createWindow);