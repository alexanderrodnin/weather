import {printHelp, printWeather} from "./view/wearher.ui.js"
import {parseArgs} from "./service/cli.parse.service.js"
import {readSettings, writeSettings} from './service/settings.repository.js'
import {getWeather} from "./service/weather.provider.js";

const initClI = async () => {
    const parsed = parseArgs(process.argv)
    if (parsed.help) {
        printHelp()
    }
    if (parsed.key) {
        writeSettings("key", parsed.key)
    }
    if (parsed.city) {
        writeSettings("city", parsed.city)
    }
    const settings = readSettings();
    const data = await getWeather(settings);
    printWeather(data)

}

await initClI();