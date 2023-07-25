/*
Stwórz funkcję createCar przyjmującą parametry brand, name, color. W deklaracji funkcji
sprawdź wartość brand, jeżeli nie jest równa "dodge" i "citroen" wyjdź z funkcji
zwracając null. Pamiętaj o użyciu operatora logicznego AND.
Zwróć nowy obiekt z nazwami właściwości jak nazwy parametrów funkcji.
Wywołaj funkcję dla następujących danych i pokaż zwrócone dane w konsoli:
- gmc, test, red
- dodge, viper, blue
- citroen, c3, white
*/

function createCar(brand, name, color) {
    if (brand != "dodge" && brand != "citroen") {
        return null
    }

    return {
        brand : brand,
        name : name,
        color : color
    }
  
}

console.log(createCar("gmc", "test", "red")) // null

console.log(createCar("dodge", "viper", "blue")) // { brand: 'dodge', name: 'viper', color: 'blue' }

console.log(createCar("citroen", "c3", "white")) // { brand: 'citroen', name: 'c3', color: 'white' }

