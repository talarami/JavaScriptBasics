// unary operator - operatory jednoargumentowe

let a = 3
a++
++a

let result = +"30" + 23 // znak + przed "30" zamienia tekst na konkretną liczbę
console.log(result) // w konsoli: 53

result = "30" + 23
console.log(result) // w konsoli: 3023

result = -"30" + 23 
console.log(result) // -7

let obj = { a: 12, b: 14, c:56 }
delete obj.b // usunięcie obiektu b
console.log(obj) 