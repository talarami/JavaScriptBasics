/* 
Operator równości w kontekście obiektów zwróci prawdę jeśli
po obu stronach mamy doczynienia z tym samym obiektem w pamięci,
czyli adres do obiektu jest taki sam.
Uwaga: jeśli ten sam obiekt przypiszemy do innej zmiennej to
obie zmienne będą wskazywały na ten sam obiekt.
*/

let a = 5
let b = a // w b jest 5

a++
console.log(a, b) // 6, 5

let obj1 = {a: 5}
let obj2 = obj1

obj1.a++
console.log( obj1, obj2 ) // { a: 6 } { a: 6 } - obie zmienne wskazują na ten sam adres w pamięci obiektu

console.log( obj1 == obj2 ) // true, bo po obu stronach jest ten sam adres w pamięci dla sprawdzanego obiektu

let obj3 = { a: 6 }

if ( obj2 == obj3 ) {
    console.log("jest równe")
} else {
    console.log("nie jest równe")
}
