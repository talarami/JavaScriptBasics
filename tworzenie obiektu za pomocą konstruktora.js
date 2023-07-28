/*
Obiekty mogą być tworzone za pomocą funkcji konstruującej czyli konstruktora. 
Taka funkcja to szablon na podstawie którego będą tworzone nowe instancje
obiektów ze słowem kluczowym new. Konstruktory piszemy z wielkiej litery.
*/

function Car(brand, name) {                         
    this.brand = brand
    this.name = name                                    // KONSTRUKTOR - SZBALON, NA PODSTAWIE KTÓREGO STWORZYMY OBIEKTY
    this.year = 1999
    this.printData = function () {
        console.log(this.name + " " + this.brand) 
    }
}

let car1 = new Car("Dodge", "Ram") // należy użyć "new"
console.log(car1)
car1.printData()

let car2 = new Car("Toyota", "Yaris")
console.log(car2)
car2.printData()

let date = new Date()
console.log(date)
console.log(date.getTime())
