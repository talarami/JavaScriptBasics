
function createCar(brand, name, color, topSpeed) {
    if (brand.length < 3) return null
    if (name.length < 3) return null
    if (color.length < 3) return null
    if (topSpeed.length == String) return null
    if (topSpeed.length < 30) return null

    const obj = {
        brand: brand,
        name: name,
        color: color,
        topSpeed: topSpeed
    }

    return obj
}

const car1 = createCar("Ford", "Mustang", "Red", 250)
console.log(car1) // { brand: 'Ford', name: 'Mustang', color: 'Red', topSpeed: 250 }

const car2 = createCar("Ford", "Mustang", "Red", "Two hundred")
console.log(car2) // null