const { shell } = require('electron');

let menuItems = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建',
        accelerator: 'CmdOrCtrl+N',
        click: (menuItem, browserWindow, event) => {
          browserWindow.webContents.send('create-new-file');
        },
      },
      {
        label: '保存',
        accelerator: 'CmdOrCtrl+S',
        click: () => {
          browserWindow.webContents.send('save-edit-file');
        },
      },
      {
        label: '搜索',
        accelerator: 'CmdOrCtrl+F',
        click: () => {
          browserWindow.webContents.send('search-file');
        },
      },
      {
        label: '导入',
        accelerator: 'CmdOrCtrl+O',
        click: () => {
          browserWindow.webContents.send('import-file');
        },
      },
    ],
  },
  {
    label: '帮助',
    role: 'help',
    submenu: [
      {
        label: '学习Electron',
        click: () => {
          shell.openExternal('http://electron.atom.io');
        },
      },
    ],
  },
];

module.exports = menuItems;
