/*
Stwórz funkcję averageNum, która obliczy średnią z 4 liczb przekazanych jako parametry. Oblicz
średnią wewnątrz funkcji i zwróć ją za pomocą return. Przetestuj funkcję dla 
następujących argumentów:
- 1, 2, 3, 4
- 30, 50, 60, 70
- 5, 10, 15, 20
Pokaż wyniki w konsoli.
*/

function averageNum(a, b, c, d) {
    return (a + b + c + d) / 4
}

let result1 = averageNum(1, 2, 3, 4)
console.log("Średnia: ", result1) // Średnia:  2.5

let result2 = averageNum(30, 50, 60, 70)
console.log("Średnia: ", result2) // Średnia:  52.5

let result3 = averageNum(5, 10, 15, 20)
console.log("Średnia: ", result3) // Średnia:  12.5

