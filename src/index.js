const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const url = require("url");
let mainWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 200,
    resizable: false,
    icon: path.join(__dirname, "assets/cico.ico"),
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/index.html"),
      protocol: "file",
      slashes: true,
    }),
  );
  Menu.setApplicationMenu(null);
});
