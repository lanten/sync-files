const path = require('path')
const { Menu, Tray, systemPreferences } = require('electron')
const { appName, trayIconDark, trayIconLight } = require('../../config/app.config')

const { createWindow } = require('../window')
const defaultMenus = require('../menus/tray-menus')


function creatTray({ menus = defaultMenus, title = appName, icon } = {}) {
  let tray = new Tray(appIcon)
  tray.setToolTip(title)
  tray.setContextMenu(Menu.buildFromTemplate(menus))
  tray.on('double-click', () => {
    createWindow('home')
  })
  console.log(systemPreferences.isDarkMode())

  return tray
}

module.exports = {
  creatTray
}