const { app, Menu } = require('electron');
const isDev = require('electron-is-dev');
const AppWindow = require('./src/utils/AppWindow.js');
const menuItems = require('./menu.config.js');
const path = require('path');

app.on('ready', () => {
  const mainWindowConfig = {
    width: 1440,
    height: 768,
  };
  const urlLocation = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, './index.html')}`;
  mainWindow = new AppWindow(mainWindowConfig, urlLocation);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  const menu = Menu.buildFromTemplate(menuItems);
  Menu.setApplicationMenu(menu);
});
