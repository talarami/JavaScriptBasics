/*
Spread operator pozwala na rozbicie zawartości tablicy lub obiektu.
*/

let arr = [1, 2, 3]

function test(a, b, c) {
    console.log(arguments)
}

test( ...arr ) // spread operator


let obj = {
    name: "Ania",
    city: "Waw"
}

let data = {
    ...obj,
    street: "Powsińska",
    age: 23
}

console.log(data) // { name: 'Ania', city: 'Waw', street: 'Powsińska', age: 23 }