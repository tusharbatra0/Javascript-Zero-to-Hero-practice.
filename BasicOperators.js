// LECTURE: Basic Operators

// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
const country = 'India';
const continent = 'Asia';
let population = 1428.62;
const isIsland = false;
const language = 'Hindi'

let halfPopulation = population / 2;

// 2. Increase the population of your country by 1 and log the result to the console
halfPopulation = halfPopulation + 1
console.log("Half Population", halfPopulation)

// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
let FinlandPopulation = 6;
if (population > FinlandPopulation) {
    console.log(`${country} has more Population than Finland's Population`)
} else {
    console.log(`${country} has less Population than Finland's Population`)
}

// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
let averageCountryPopulation = 33;

if (population >= averageCountryPopulation) {
    console.log(`${country} have more than Average Population which is ${averageCountryPopulation} Million`)
}
else {
    console.log(`${country} have less people than ${averageCountryPopulation}`)
}

// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese
const description = `${country} is in ${continent}, and its ${halfPopulation} people speak ${language}`
console.log(description)