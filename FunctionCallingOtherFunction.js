// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice
function percentageOfWorld(population){
    let populationinPercentage =  population/7900*100*10;
    return populationinPercentage
}

function describePopulation(country, population){ 
    let populationinPercentage = percentageOfWorld(population);
    return `${country} has ${population} people, which is about ${populationinPercentage} in percentage`
}

console.log(describePopulation('India', 1428))