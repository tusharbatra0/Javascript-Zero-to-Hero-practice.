// LECTURE: Dot vs. Bracket Notation

// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
const myCountry = {
    country : 'India',
    capital : 'New Delhi',
    language : 'Hindi',
    populations : 1428,
    neighbours : ['China', 'Pakistan', 'Sri Lanka']
}
console.log(`${myCountry.country} has ${myCountry.populations} million ${myCountry.language}-speaking people, it's neighbouring countries are ${myCountry.neighbours} and a capital called ${myCountry.capital}`)

// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.
myCountry.populations += 2;
console.log(`Increased the population with 2 ${myCountry.populations}`)

myCountry.populations -= 2;
console.log(`Increased the population with 2 ${myCountry.populations}`)