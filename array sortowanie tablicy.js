
let arr = ["Kasia", "Asia", "Zuza", "Daniel"]
arr = arr.sort() // sortowanie alfabetyczne
console.log(arr) 

arr = arr.reverse() // odwrócone sortowanie alfabetyczne


arr = [23, 111, 678, 98]
arr = arr.sort(function (a, b) {    // sortowanie liczb od najmniejszej do największej za pomocą funkcji
    return a - b
})

console.log(arr)