
let obj = { data: 123 }

console.log( "data" in obj ) // true
console.log( "a" in obj ) // false

const arr = [1,2,3,4,5]
console.log( 3 in arr ) // true
console.log( 12 in arr ) // false

