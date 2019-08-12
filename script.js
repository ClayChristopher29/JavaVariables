// In your JavaScript file, instantiate and assign the following variables with information about the current weather:
// temperature should hold a number representing the current temperature in Fahrenheit
// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
// sunriseTime should hold a string representing what time the sun rose this morning
// sunsetTime should hold a string representing what time the sun will set this evening
// Log each variable to the console.
// Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM."
// exercise 1
var currentWeather ={
    temp: 86,
    condition:"clear",
    sunRiseTime: "0600",
    sunSetTime:"2045",
}
console.log(`"It is currently ${currentWeather.condition} skys, and a comfortable ${currentWeather.temp} degrees out. The Sun rose today around ${currentWeather.sunRiseTime}, and will set this evening around ${currentWeather.sunSetTime}.`)
// exercise 2
var highTemperatures = [55, 57, 53, 47, 56, 50];
console.log(highTemperatures[0])
var lowTemperatures = [33, 30, 29, 35, 31, 32];
console.log(lowTemperatures[5])

for (var i =0; i< highTemperatures.length; i++){
    var avgHigh = (highTemperatures[i]/highTemperatures.length) * highTemperatures.length
}
console.log(avgHigh)

// exercise 3
console.log(currentWeather.temp)
console.log(`The current temperature outside is ${currentWeather.temp} degrees.`)

// exercise 4
var todaysWeather = {
    temperature: {
      high: 55,
      low: 32
    },
    conditions: "sunny",
    astronomy: {
      sunrise: "7:43 AM",
      sunset: "5:09 PM"
    }
  }
//   Log today's high temperature to the console.
console.log(todaysWeather.temperature.high)
// Log today's low temperature to the console.
console.log(todaysWeather.temperature.low)
// Log today's conditions to the console.
console.log(todaysWeather.conditions)
// Log today's sunrise time to the console.
console.log(todaysWeather.astronomy.sunrise)
// Use string template literals to create a more detailed description of today's weather.
console.log(`Todays detailed weather repost is will have a high of ${todaysWeather.temperature.high} degrees, and a low temperature of ${todaysWeather.temperature.low} degrees. There will be a sky condition of ${todaysWeather.condition}. The sun will rise at around ${todaysWeather.astronomy.sunrise}, and will most likely set around ${todaysWeather.astronomy.sunSetTime} `)