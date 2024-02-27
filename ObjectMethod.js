// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'Hindi',
    populations: 1428,
    neighbours: ['China', 'Pakistan', 'Sri Lanka'],
    describe: function () {
        console.log(`${this.country} has ${this.populations} million ${this.language}-speaking people, it's neighbouring countries are ${this.neighbours} and a capital called ${this.capital}`)
    },
    checkIsland: function () {
        let isIsland = this.neighbours.length === 0;
        console.log({...this , isIsland}) 
    }
}

// 2. Call the 'describe' method
myCountry.describe()
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.
myCountry.checkIsland()