
let arr = ["Ala", "Ola", "Kasia", "Ola", "Piotr"]

let newArr = arr.map(function (value, index, arr) { // dodanie "!" do każdego elementu tablicy
    return value + "!"
} )
console.log(newArr) // [ 'Ala!', 'Ola!', 'Kasia!', 'Ola!', 'Piotr!' ]

let m = arr.map( v => v + "!!" ) // dodanie "!!" do każdego elementu tablicy
console.log(m) // [ 'Ala!!', 'Ola!!', 'Kasia!!', 'Ola!!', 'Piotr!!' ]

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8]
let n = arr2.map(Math.sqrt) // wykonanie pierwiastka kwadratowego na każdym elemencie
console.log(n)



let names = ["Daniel", "Ola", "Kasia", "Ola", "Piotr"]

let namesMin5len = names.filter( v => v.length >= 5 ) // uzyskanie elementów, które mają minimum 5 znaków
console.log(namesMin5len)

let data = [1, 2, 3, 4, 5, 6]
let value = data.reduce(function (accumulator, currentValue, index, arr) {
    return accumulator + currentValue                                           // dodanie wszystkich elementów do siebie
 })
 console.log(value) // 21

 console.log( data.every( v => v >= 0 ) ) // sprawdzenie czy wartości od 1 do 6 z tablicy są większe równe 0