// typeof zwraca typ wartości jako łańcuch znaków

console.log ( typeof 12 ) // "number"
console.log ( typeof "str" ) // "string"
console.log ( typeof "45" ) // "string"
console.log ( typeof true ) // "boolean"
console.log ( typeof {b: 12} ) // "object"
console.log ( typeof [1,2,3] ) // "object"
console.log ( typeof undefined ) // "undefined"
console.log ( typeof null ) // "object" // błąd javascript, który nigdy nie będzie naprawiony
console.log ( typeof Symbol() ) // "symbol"
console.log ( typeof console.log ) // "function"

let data = 123
if (typeof data == "number") {
    console.log("data to liczba o wartości: ", data)
} else if (typeof data == "string") {
    console.log("data to string o wartości: ", data)
}