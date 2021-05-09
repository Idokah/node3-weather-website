const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b663aacc62bd7519c405c6024fa59343&query=' + latitude +','+ longitude + '&units=m'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like "
             + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%."
            )
        }
    })
}


module.exports = forecast