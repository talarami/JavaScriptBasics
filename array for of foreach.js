
let arr = [23, 78, 123, 7]

for (let a = 0; a < arr.length; a++) {              // pętla for do iteracji tablicy
    console.log( arr[a] )
}                                           

for ( let el of arr ) {                             // pętla for of do przejścia po wszystkich elementach tablicy
    console.log(el)
}

arr.forEach(function (item, index, array) {         // opisany każdy element tablicy: 0: 23, 1: 78, 2: 123, 3: 7
    console.log(index + ": " + item)
} )