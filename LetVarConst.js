// LECTURE: let, const and var

// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
const country = 'India';
const continent = 'Asia';
let population = 1428.62;
const isIsland = false;
const language = 'Hindi'

// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// I guess only the value of Population can be changed. I've already declared it as let.
population = 1500;

// 3. Try to change one of the changed variables now, and observe what happens
console.log(country, continent, population, isIsland, language)