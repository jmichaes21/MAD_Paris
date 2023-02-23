// Suhu conversion Fahrenheit to Celcius

export let fahrenheitToCelcius = (fahrenheit) => {
    let celcius = 5 / 9 * (fahrenheit - 32);
    console.log(`${fahrenheit} Fahrenheit = ${celcius} Celcius`);
};
