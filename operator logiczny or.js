// Operator logiczny or czyli || daje prawdę jeśli występuje chociaż jedna
// prawda po dowolnej stronie, czyli da false jeśli wszystkie wyrażenia zwrócą false.

console.log( true || true ) // true
console.log( true || false ) // true
console.log( false || false ) // false

if (10 >= 1 || "Ania" == "Basia" || 12 == 100) {
    console.log("wykona się") // jedna strona true, więc się wykona
}

if (12 != 12 || 45 == "Ola") {
    console.log("nie wykona się") // false po obu stronach, więc nie wykona się
}

