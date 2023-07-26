/*
Napisz funkcję która podmieni łańcuchy znaków w tablicy na długości tych
łańcuchów. W każdej iteracji przekazanej tablicy pobierzesz łańcuch znaków,
odczytasz jego długość i nadpiszesz pod tym samym indeksem wartość
będącą długością tego łańcucha. Tablicę można w ten sposób zmodyfikować,
gdyż w praktyce jest to obiekt.
Wywołaj tę funkcję z tablicą mającą następujące elementy: Ola, Kasia, Daniel/
Wyświetl na końcu zmodyfikowaną tablicę.
*/

function arrLen(arr) {
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        arr[i] = str.length
    }
}


let arr = [ "Ola", "Kasia", "Daniel" ]


arrLen(arr)
console.log(arr) // [ 3, 5, 6 ]