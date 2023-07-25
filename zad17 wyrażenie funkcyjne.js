/*
Napisz zmienną o nazwie division. Przypisz do zmiennej funkcję anonimową przyjmującą 
dwa parametry i zwracającą wynik dzielenia dwóch liczb. Wywołaj utworzone wyrażenie 
funkcyjne dla poniższych argumentów i pokaż wynik w konsoli:
- 10, 5
- 299, 11
*/

let division = function(a, b) {
    return a / b
}


console.log(division(10,5)) // 5

console.log(division(299, 11)) // 11