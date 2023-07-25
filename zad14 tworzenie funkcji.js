/* Stwórz funkcję o nazwie multiplyNumbers, która przyjmuje dwa parametry w swojej deklaracji.
Wewnątrz powołaj zmienną lokalną do której przypiszesz wynik pomnożenia przez siebie obu
parametów. Pokaż w konsoli wynik mnożenia.
Wywołaj funkcję z następującymi argumentami:
- 3 oraz 8
- 50 oraz 45
- 6789 oraz 12321
*/

function multiplyNumbers(a, b) {
    let result = a * b
    console.log("Wynik mnożenia: ", result)
}

multiplyNumbers(3, 8) // Wynik mnożenia:  24
multiplyNumbers(50, 45) // Wynik mnożenia:  2250
multiplyNumbers(6789, 12321) // Wynik mnożenia:  83647269