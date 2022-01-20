const args = process.argv.slice(2)
let gradus;
let unit = args[1].toLowerCase()

if (!isNaN(args[0])) {
    if (unit === 'c') {
        gradus = (args[0] - 32) * 5 / 9;
        unit = '°F'
        console.log(`Celsius ${args[0]} is equal to ${gradus}${unit}`);
    
    } else {
        gradus = (args[0] * 9 / 5) + 32
        unit = '°C'
        console.log(`Fahrenheit ${args[0]} is equal to ${gradus}${unit}`);
    }
} else {
    console.log("Enter a number");
}


