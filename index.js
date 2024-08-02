const { app, BrowserWindow } = require('electron')
const path = require('path');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        height: 150,
        width: 320,
        useContentSize: true,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        resizable: false,
        fullscreenable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

