'use strict'

const electron = require('electron')
// const glob = require('glob')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

function createWindow() {
  mainWindow = new BrowserWindow({width: 155, height: 155, frame: false, 
                                  transparent: true, resizable: false, alwaysOnTop: true,
                                  icon: __dirname + "/img/tomato-icon.png"})
  // mainWindow = new BrowserWindow({width: 255, height: 255, alwaysOnTop: true})
  // mainWindow.webContents.openDevTools()

  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))

  mainWindow.on('close', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})