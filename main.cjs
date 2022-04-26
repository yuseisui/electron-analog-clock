const fs = require('fs');
const path = require('path');
const process = require('process');
const {app, BrowserWindow, Menu, Tray} = require('electron');

let tray;

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 160,
    height: 160,
    resizable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    show: false,
    frame: false,
    transparent: true,
    title: app.getName(),
  });

  win.loadFile('src/index.html');
  win.once('ready-to-show', () => {
    win.show();
  });

  // if (!app.isPackaged) {
  //   win.webContents.openDevTools({mode: 'undocked'});
  // }

  /*  */

  const initFilePath = path.join(app.getPath('temp'), 'analog-clock-init.json');

  try {
    const initFile = fs.readFileSync(initFilePath);
    const {bounds} = JSON.parse(initFile);
    win.setPosition(bounds.x, bounds.y);
  } catch {}

  win.on('close', () => {
    const bounds = win.getBounds();
    fs.writeFileSync(initFilePath, JSON.stringify({bounds}));
  });

  /*  */

  tray = new Tray('src/clock.ico');

  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: 'Quit',
        role: 'quit',
      },
    ]),
  );
  tray.setToolTip(app.getName());
  tray.on('click', () => {
    win.focus();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
