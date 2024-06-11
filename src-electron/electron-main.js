import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import os from "os";
const { menubar } = require("menubar");

// needed in case process is undefined under Linux
const platform = process.platform || os.platform();

const mb = menubar({
  index: process.env.APP_URL,
  icon: process.env.DEBUGGING
    ? path.resolve(__dirname, "../../src-electron/icons/PlusIcon.png")
    : path.resolve(__dirname, "src-electron/icons/PlusIcon.png"),
  browserWindow: {
    width: 270,
    height: 170,
    maxHeight: 170,
    minHeight: 170,
    maxWidth: 270,
    minWidth: 270,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  },
});
mb.on("ready", () => {
  console.log("menubar ready");
});

ipcMain.handle("quit-app", () => {
  app.quit();
});

/*
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    icon: "C:\\Users\\lajtaib\\Desktop\\quasar-electron-menubar-counter\\src-electron\\icons\\PlusIcon.png", // tray icon
    width: 1270,
    height: 1170,
    // maxHeight: 170,
    // minHeight: 170,
    // maxWidth: 270,
    // minWidth: 270,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  });

  mainWindow.loadURL(process.env.APP_URL);

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools();
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on("devtools-opened", () => {
      mainWindow.webContents.closeDevTools();
    });
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
*/
