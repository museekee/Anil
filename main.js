const { app, BrowserWindow, Menu } = require('electron');
const runner = require("./runner");
const LANG = require("./Lang/ko-kr.json");

function createWindow () {
  let win = new BrowserWindow({
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
          click: () => runner.startServer()
        },
        {
          label: LANG["menu-server-off"],
          accelerator: "Control+P",
          click: () => runner.stopServer()
        }
      ]
    }
  ];
  let newMenu = Menu.buildFromTemplate(MAIN_MENU);
  Menu.setApplicationMenu(newMenu);

  win.loadFile("./ASM/index.html");
}

app.on('ready', createWindow);