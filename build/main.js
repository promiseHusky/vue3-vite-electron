(()=>{var e={779:(e,t,o)=>{const{shell:n}=o(298);let r=[{label:"文件",submenu:[{label:"新建",accelerator:"CmdOrCtrl+N",click:(e,t,o)=>{t.webContents.send("create-new-file")}},{label:"保存",accelerator:"CmdOrCtrl+S",click:()=>{browserWindow.webContents.send("save-edit-file")}},{label:"搜索",accelerator:"CmdOrCtrl+F",click:()=>{browserWindow.webContents.send("search-file")}},{label:"导入",accelerator:"CmdOrCtrl+O",click:()=>{browserWindow.webContents.send("import-file")}}]},{label:"帮助",role:"help",submenu:[{label:"学习Electron",click:()=>{n.openExternal("http://electron.atom.io")}}]}];e.exports=r},690:(e,t,o)=>{"use strict";const n=o(298);if("string"==typeof n)throw new TypeError("Not running in an Electron environment!");const r="ELECTRON_IS_DEV"in process.env,s=1===Number.parseInt(process.env.ELECTRON_IS_DEV,10);e.exports=r?s:!n.app.isPackaged},516:(e,t,o)=>{const{BrowserWindow:n}=o(298);e.exports=class extends n{constructor(e,t){super({width:800,height:600,webPreferences:{contextIsolation:!1,nodeIntegration:!0,enableRemoteModule:!0,nodeIntegrationInWorker:!0},show:!1,backgroundColor:"#efefef",...e}),this.webContents.openDevTools(),this.loadURL(t),this.once("ready-to-show",(()=>{this.show()}))}}},298:e=>{"use strict";e.exports=require("electron")},17:e=>{"use strict";e.exports=require("path")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}(()=>{const{app:e,Menu:t}=o(298),n=o(690),r=o(516),s=o(779),l=o(17);e.on("ready",(()=>{const e=n?"http://localhost:3000":`file://${l.join(__dirname,"./index.html")}`;mainWindow=new r({width:1440,height:768},e),mainWindow.on("closed",(()=>{mainWindow=null}));const o=t.buildFromTemplate(s);t.setApplicationMenu(o)}))})()})();