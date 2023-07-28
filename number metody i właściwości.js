
let num = 123

console.log(Number.MAX_SAFE_INTEGER) // największa liczba całkowita jaką mogę zapisać w number
console.log(Number.MIN_SAFE_INTEGER) // najmniejsza liczba całkowita jaką mogę zapisać w number
console.log(Number.MAX_VALUE) // największe dodatnia liczba całkowita
console.log(Number.MIN_VALUE) // najmniejsza dodatnia liczba całkowita

console.log(Number.parseFloat("123.23")) // konwersja z łańcucha znaków na liczbę zmiennoprzecinkową
console.log(Number.parseInt("123")) // konwersja z łańcucha znaków na liczbę
console.log(Number.isInteger(23)) // sprawdzenie czy liczba jest liczbą całkowitą

let a = 1 / 0 // infinity

console.log(Number.isFinite(a)) // sprawdzenie czy liczba jest skończona

console.log(Math.round(12.56)) // zaokrąglenie do najbliższej liczby całkowitej 
console.log(Math.floor(1.87)) // zaokrąglenie w dół
console.log(Math.ceil(1.87)) // zaokrąglenie w górę
console.log(Math.random()) // losowa liczba od 0 do 1
console.log(Math.sqrt(16)) // pierwiastek kwadratowy z jakiejś liczby

console.log(1234243.3243534.toFixed(4)) // zaokrąglenie do określonej ilości miejsc po przecinku

