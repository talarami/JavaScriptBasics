
// Zmienne globalne są dostępne w całym programie, zmienne lokalne mają zasięg tylko aktualnego bloku i bloków potomnych.

let num = 12 // globalna zmienna
console.log("num: ", num) // 12

if (true) {
    let num = 45 // lokalna zmienna
    console.log("num z if: ", num) // 45
}

console.log("num: ", num) // 12