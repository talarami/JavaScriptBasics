/*
Stwórz zmienną temp z wartością początkową 5, opisującą temperaturę powietrza.
Dodaj kombinację if else if oraz sprawdź poniższe warunki używając
operatorów porównania:
- wartość mniejsza równa zero to info w konsoli "Zimno i ślisko"
- wartość mniejsza równa 8 to "wczesna wiosna"
- wartość mniejsza równa 15 to "wiosna"
- wartość mniejsza od 25 to "lato"
- wartość większa równa 25 to "upał"
*/

let temp = 5

if ( temp <= 0 ) {
    console.log("Zimno i ślisko")
} else if ( temp <= 8 ) {
    console.log("Wczesna wiosna")
} else if ( temp <= 15 ) {
    console.log("Wiosna")
} else if ( temp < 25 ) {
    console.log("Lato")
} else if ( temp >= 25 ) {
    console.log("Upał")
}