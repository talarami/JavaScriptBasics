/*
Prywmitywy przekazywane jako argumenty do wywołanej funkcji są kopiami przekazanych
wartości. Natomiast obiekty są przekazane przez referencję, przez co jeśli są zmienione
w funkcji to te zmiany będą widoczne poza funkcją w tym obiekcie.
*/

function foo(num) {
    num = 99
    console.log(num) // 99
}


let a = 10
foo(10)
console.log(a) // 10





function bar(obj) {
    obj.num = 201
}

let data = { num: 100 }
bar(data)
console.log(data.num) // 201