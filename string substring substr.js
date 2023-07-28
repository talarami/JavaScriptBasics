
let str = "0123456789"


console.log( str.substring(4) ) // przekazanie od którego indeksu ma zostać pobrany łańcuch znaków
console.log( str.substring(4, 7) ) // przekazanie od którego do którego indeksu ma zostać pobrany łańcuch znaków ( w praktyce od 4 do 6)


console.log(str.substr(2, 2)) // przekazanie od którego ideksu ma zostać pobrany łańcuch znaków i ile elementów ma zostać pobranych

console.log(str.substr(-2)) // przekazanie od drugiej wartości od końca
