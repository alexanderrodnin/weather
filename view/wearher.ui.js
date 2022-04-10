import dedent from 'dedent-js'

const printHelp = () => {
    console.log(dedent(
        `-c [set the city]
        -k [set the weather key]
        -h [show help]`
    ))
}

export {printHelp}