/*
Metody to funkcje w obiekcie, które mogą operować na danych danego obiektu
z wykorzystaniem this.
*/

let car = {
    brand: "chen",
    name: "corvette",
    year: 1988,
    topSpeed: 250,
    printInfo: function () {
        console.log( this.brand + " " + this.name + " " + this.year )
    },
    getTopSpeed: function () {
        return this.topSpeed
    }
}

car.printInfo()

console.log( car.getTopSpeed() ) // 250 