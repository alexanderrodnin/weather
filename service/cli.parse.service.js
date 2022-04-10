const cliParamToKeyMap = {
    "-c": "city",
    "-k": "key",
    "-h": "help"
}

const parseArgs = (args) => {
    const res = {}
    const [executor, file, ...rest] = args
    rest.forEach((value, index, array) => {
        if (value.charAt(0) === '-') {
            if (index < rest.length - 1) {
                res[cliParamToKeyMap[value]] = rest[index + 1]
            } else {
                res[cliParamToKeyMap[value]] = true
            }
        }
    })

    return res
}

export {parseArgs}