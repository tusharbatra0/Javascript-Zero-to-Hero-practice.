// Same Previous assignment but this time with while loop

let listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
]

let i = 0;
while(i<listOfNeighbours.length){
    let j = 0;
    while(j < listOfNeighbours[i].length){
        console.log('Neigbour :', listOfNeighbours[i][j])
        j++
    }
    i++
}