const { app, BrowserWindow } = require('electron');
const path = require('node:path');

function createWindow() {
  const win = new BrowserWindow({
    width: 420,
    height: 320,
    minWidth: 260,
    minHeight: 180,
    frame: false,
    alwaysOnTop: true,
    resizable: true,
    backgroundColor: '#000000',
    icon: path.join(__dirname, 'midstream-ridge-badge.png'),
    webPreferences: {
      contextIsolation: true,
    },
  });

  // keeps the window above fullscreen apps/presentations too, not just normal windows
  win.setAlwaysOnTop(true, 'screen-saver');
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  win.loadFile('timer.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
