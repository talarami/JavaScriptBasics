/*
[].splice( start, deleteCount, item1, item2... )
Metoda splice kasuje ilość elementów od indeksu start i dodaje 
w tym miejscu kolejne elementy.
*/

let arr = ["a", "b", "c", "d", "e"]

let deletedElements = arr.splice(1, 2) // najpierw wybieramy od którego elementu, a potem ile elementów skasować; w praktyce usunięcie "b" i "c"
console.log(arr) // [ 'a', 'd', 'e' ]
console.log(deletedElements) // [ 'b', 'c' ]

arr.splice(0, 1, "raz", "dwa") // najpierw wybieramy który indeks chcemy zmodyfikować, później który kasujemy, a następnie co dodajemy
console.log(arr) // [ 'raz', 'dwa', 'd', 'e' ]