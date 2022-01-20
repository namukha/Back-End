let gradus;
let unit = ''

const args = process.argv.slice(2)


if (args[1] === 'c' || 'C') {
    gradus = (args[0] - 32) * 5 / 9;
    console.log(gradus);
    unit = '°F'
    console.log(`Celsius ${args[0]} is equal to ${gradus}${unit}`);

} else if (args[1] === 'F' || 'f') {
    gradus = (args[0] * 9 / 5) + 32
    unit = '°C'
    console.log(`Fahrenheit ${args[0]} is equal to ${gradus}${unit}`);
}


