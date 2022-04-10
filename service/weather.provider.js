import axios from "axios";

const getWeather = async (settings) => {
    const wholeData = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: settings.city,
            appid: settings.key,
            lang: 'ru',
            units: 'metric'
        }
    })
    return wholeData.data

}

export {getWeather}