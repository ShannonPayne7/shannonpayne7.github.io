function windChill(tempF, speed) {
    let calculate = 35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) +
        (0.4275 * tempF * (speed ** 0.16));
    return calculate.toFixed(0);
}

let temperature = parseFloat(document.getElementById('temperature').innerText);
let windSpeed = parseFloat(document.getElementById('windspeed').innerText);
let windChillOutput = windChill(temperature, windSpeed);
document.getElementById("windchill").innerText = windChillOutput;

