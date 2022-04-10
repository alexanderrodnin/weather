import dedent from 'dedent-js'

const printWeather = (data) => {
    console.log(data)
}

const printHelp = () => {
    console.log(dedent(
        `-c [set the city]
        -k [set the weather key]
        -h [show help]`
    ))
}

export { printHelp, printWeather }