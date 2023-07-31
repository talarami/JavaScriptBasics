
let arr = ["Ala", "Ola", "Kasia", "Ola", "Piotr"]

let pos = arr.indexOf("Ola") // wyszukanie pod którym ideksem w tablicy znajduje się słowo "Ola"
console.log(pos) // 1

pos = arr.indexOf("Ola", 2) // wyszukanie pod którym ideksem w tablicy znajduje się słowo "Ola", ale szukając od drugiego elementu
console.log(pos) // 3

pos = arr.lastIndexOf("Ola") // wyszukanie od końca pod którym ideksem w tablicy znajduje się słowo "Ola"
console.log(pos) // 3

console.log( arr.includes("Ola") ) // sprawdzenie czy dany element istnieje w tablicy; true


