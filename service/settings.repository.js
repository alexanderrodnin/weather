import fs from 'fs'
import path from 'path'
import os from 'os'

const storagePath = path.join(os.homedir(), "weather-settings.json");

const writeSettings = (key, value) => {
    let data = {}
    if (isStorageExists()) {
        data = readSettings()
    }
    data[key] = value

    fs.writeFileSync(storagePath, JSON.stringify(data))
}

const readSettings = () => {
    let res = {}

    if (isStorageExists()) {
        res = JSON.parse(fs.readFileSync(storagePath).toString())
    }

    return res
}

const isStorageExists = () => {
    return fs.existsSync(storagePath)
}

export {writeSettings, readSettings}