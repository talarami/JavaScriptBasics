// arrow function to skrócony zapis funkcji

function test(a, b) {
    return a * b
}

let multiply = (a, b) => a * b

console.log(multiply(3, 10)) // 30

let division = (a, b) => {
    return a/b
}

console.log(division(45, 12)) // 3.75


// Funkcje strzałkowe nie mają dostępu do obiektu arguments jak zwykłe obiekty.

// let foo = () => console.log(arguments) // BŁĄD
// foo(1,2,3,4,5)

let bar = (...params) => console.log(params)
bar(1,2,3,4,5)

// SPOSÓB 1:

let getObj = (name) => {
    return {
        name: name,
        type: "user"
    }
}

console.log(getObj("Ania")) // { name: 'Ania', type: 'user' }

// SPOSÓB 2:

let getObj2 = (name) => ( { name: name, type: "user" } )
console.log(getObj2("Dominik")) // { name: 'Dominik', type: 'user' }