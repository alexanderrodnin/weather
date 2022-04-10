import {printHelp} from "./view/wearher.ui.js"
import {parseArgs} from "./service/cli.parse.service.js"

const initClI = () => {
    const parsed = parseArgs(process.argv)
    if (parsed.help) {
        printHelp()
    } else {
        console.log(parsed)
    }
}

initClI();